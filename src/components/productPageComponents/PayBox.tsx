"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "@/store/products/cartSlice";
import { usePathname, useRouter } from "next/navigation";
import { RootState } from "@/store";
import { useConvertNairaToUsd } from "@/hooks/useConvertNairaToUsd";
import { useUSDToOthers } from "@/hooks/useUSDToOthers";
import { list } from "@/utils/dummy";
import InputSelect from "@/components/InputSelect";
import { ConvertRate } from "@/types/mixpayTypes";
import { TfiInfoAlt } from "react-icons/tfi";
import { BsBell } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa6";

function PayBox({ product }: { product: any }) {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const getPath = usePathname();
  const usdtEstimation = Array.from({ length: 96 }, (_, i) => i + 10);
  const [value, setValue] = useState<number | string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [notifyBox, setNotifyBox] = useState<boolean>(false);
  const [usdPrice, setUsdPrice] = useState<number | string>("");
  const [acNumber, setAcNumber] = useState<number | string>("");
  const { onConvertNairaToDollar } = useConvertNairaToUsd();
  const { isLoading, estimatedPrices } = useUSDToOthers(usdPrice as number);
  const [selectedOption, setSelectedOption] = useState<ConvertRate | null>(
    null
  );

  const handleAddToCart = (id: string | undefined, name: string) => {
    setLoading(true);
    dispatch(
      addItem({
        id: product?.id,
        name: product?.name,
        amount: usdPrice,
        quantity: 1,
        productImage: product?.imageUrl,
        accountNumber: acNumber,
        currency: selectedOption?.symbol,
      })
    );
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  console.debug(acNumber);

  const handleRemoveFromCart = (id: string | undefined, name: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(removeItem({ id: product?.id }));
    }, 2000);
  };

  const handleInputChange = (value: number | string) => {
    const newValue = value as number;
    setValue(newValue);
    try {
      if (product?.currency === "ngn") {
        const convertedValue = onConvertNairaToDollar(newValue);
        setUsdPrice(convertedValue);
      } else {
        // else other product
      }
    } catch (error) {
      setUsdPrice("");
    }
  };
  const productId = getPath.split("/").filter(Boolean).pop();
  const productName = "New Product";
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const currentProduct = cartItems?.find(
    (item: any) => item?.id === product?.id
  );
  const handleSelectionChange = (selected: any) => {
    setSelectedOption(selected);
    localStorage.setItem("paymentCurrency", selected?.symbol);
  };

  return (
    <div className="payBox">
      <h5>
        Suggested Amount’s in{" "}
        <span className="text-uppercase">{product?.currency}</span>
      </h5>
      <div className="btnList my-3">
        {list.map((item, key) => (
          <button
            className="btn shadow-sm border-0"
            onClick={() => handleInputChange(item)}
            key={key}
          >
            {item}
          </button>
        ))}
      </div>
      {!product?.isOutOfStock ? (
        <div className="row">
          <div className="col-md-8">
            <input
              type="number"
              className="form-control p-3 text-center text-bold shadow-sm"
              onChange={(e) => handleInputChange(e.target.value)}
              value={value}
              placeholder="Amount"
              inputMode="numeric"
            />
          </div>
          <div className="col-md-4">
            <InputSelect
              data={estimatedPrices}
              onSelectionChange={handleSelectionChange}
            />
          </div>
          <div className="col-md-8 mt-4">
            <input
              type="number"
              className="form-control p-3 pl-4 shadow-sm text-center "
              placeholder={"Enter Number"}
              inputMode="numeric"
              onChange={(e) => setAcNumber(e.target.value)}
            />
          </div>
          <div className="col-md-4 mt-4">
            {!currentProduct ? (
              <button
                className="btn btn-primary p-3 shadow-sm text-center w-100"
                disabled={!loading && value ? false : true}
                onClick={() => handleAddToCart(productId, productName)}
              >
                {!loading ? "Add to Cart" : "Processing..."}
              </button>
            ) : (
              <button
                className="btn btn-primary p-3 shadow-sm text-center w-100"
                disabled={!loading ? false : true}
                onClick={() => handleRemoveFromCart(productId, productName)}
              >
                {!loading ? "Remove from Cart" : "Processing..."}
              </button>
            )}
          </div>
        </div>
      ) : (
        <React.Fragment>
          {!notifyBox ? (
            <div className="outOfStock shadow ">
              <div>
                <TfiInfoAlt /> We are currently out of stock on this product
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <button
                  onClick={() => setNotifyBox(true)}
                  className="btn rounded-pill shadow px-2 "
                >
                  <BsBell /> Notify me when it`s back
                </button>
                <button
                  onClick={() => navigate.back()}
                  className="btn rounded-pill px-3 btn-secondary mx-2 shadow"
                >
                  <FaArrowDown className="mx-1" />
                  Similar Products
                </button>
              </div>
            </div>
          ) : (
            <div className="outOfStockNotification shadow">
              <BsBell /> Let me know when {product?.name} is back
              <hr />
              <input
                type="text"
                placeholder="Fill in your email here"
                className="form-control shadow-sm my-3"
              />
              <input type="checkbox" className="checkbox link" /> Add me to the
              newsletter for updates on new products
              <div className="mt-3 d-flex justify-content-between">
                <button
                  onClick={() => navigate.push("/categories/bill-payment")}
                  className="btn rounded-pill shadow px-5 "
                >
                  Back
                </button>
                <button
                  onClick={() => setNotifyBox(false)}
                  className="btn rounded-pill px-5 btn-secondary px-3 mx-4 shadow"
                >
                  <BsBell /> Notify me
                </button>
              </div>
            </div>
          )}
        </React.Fragment>
      )}
      <div className="overlay"></div>
    </div>
  );
}

export default PayBox;
