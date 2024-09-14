"use client";
import React, { useState } from "react";
import CustomImage from "../../../components/CustomImage";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import OrderSummary from "@/components/paymentPageComponents/OrderSummary";
import { useRouter } from "next/navigation";

interface checkOutItemProps {
  id: number;
  name: string;
  price: number;
  amount: number;
  productImage?: string;
  quantity?: number;
}
interface EachProductProps {
  item: checkOutItemProps;
}

const EachProduct: React.FC<EachProductProps> = ({ item }) => {
  const [quantity, setQuantity] = useState<number>(item?.quantity || 0);
  const [netPrice, setNetPrice] = useState<number>(item?.amount || 0);
  const [point, setPoint] = useState<number>(0);
  const navigate = useRouter();

  return (
    <div
      className="orderCards shadow-sm zoom1 link"
      onClick={() => navigate.push(`/products/${item?.id}`)}
    >
      <div className="imageCard">
        <CustomImage fullSrc={item?.productImage} />
      </div>
      <div className="cartProductInfo px-2">
        <p className="d-block m-0">
          {item?.name.slice(0, 100)}
          {item?.name?.length >= 100 && "..."}
        </p>
        {/* <p>${item?.amount || 0}</p>  */}
      </div>
      <div className="cartProductQuantity">
        <div>
          <label htmlFor="">Quantity</label>
          <input
            className="form-control shadow-none"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            value={quantity}
            type="number"
            inputMode="numeric"
          />
        </div>
        <div className="netPriceBox">
          <label htmlFor="">Net Price</label>
          <input
            className="form-control shadow-none "
            onChange={(e) => setNetPrice(parseInt(e.target.value))}
            value={netPrice}
            type="text"
            readOnly
          />
        </div>
        {/* <div>
          <label htmlFor="">Points</label>
          <input
            className="form-control shadow-none" 
            onChange={(e) => setPoint(parseInt(e.target.value))}
            value={point}
             type="text" 
            readOnly
          />
        </div> */}
      </div>
    </div>
  );
};

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = cartItems.reduce((accumulator: number, item: any) => {
    return accumulator + (item?.amount || 0);
  }, 0);
  return (
    <div className="checkOutPage pt-4">
      <div className="row">
        <div className="col-md-8 orderLists pt-4">
          <h3>
            Order details
            <small>({cartItems?.length})</small>
          </h3>
          {cartItems?.length ? (
            cartItems.map((item: checkOutItemProps, key: number) => (
              <EachProduct item={item} key={key} />
            ))
          ) : (
            <div>No Product Added to cart</div>
          )}
        </div>
        <div className="col-md-4">
          <OrderSummary point={1} total={totalAmount} payload={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
