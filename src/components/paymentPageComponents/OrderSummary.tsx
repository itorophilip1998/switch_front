import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiInfo } from "react-icons/fi";
import MixPay from "@/components/MixPay";
import { useCountryCodeAPI } from "@/api/mixPay";
import { useLocationAPI, useIpAddressAPI } from "@/api/products";
import { UserInfo } from "@/types/mixpayTypes";

interface SummaryProps {
  point: number;
  total: number;
  payload: any;
} 

const OrderSummary: React.FC<SummaryProps> = ({ point, total, payload }) => {
  const router = useRouter();
  const [iframeSet, setIframeSet] = useState<boolean>(false);
  const { data: ipAddress } = useIpAddressAPI();
  const { data: locationData } = useLocationAPI(ipAddress);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    coupon: "",
  });
  const paymentCurrency = localStorage.getItem("paymentCurrency") || "USDT";

  const handleIframeSet = (isSet: boolean) => {
    setIframeSet(isSet);
  };

  return (
    <div className="orderSummary">
      {!iframeSet && (
        <div className="topOrder">
          <h3> Order Summary</h3>
          <ul>
            {/* <li>
              <span>Earned points</span> <span>{point}</span>
            </li> */}
            <li>
              <span>
                Total <FiInfo className="link" />
              </span>
              <span>
                {total} {paymentCurrency}
              </span>
            </li>
          </ul>
          <div className="couponCode mb-4">
            <input
              type="text"
              className="form-control shadow-none"
              placeholder="Enter coupon"
              onChange={(e) => {
                setUserInfo({ ...userInfo, coupon: e.target.value });
              }}
            />
            <button className="btn btn-primary">Apply Code</button>
            <input
              type="email"
              className="form-control shadow-none border-0 border-bottom rounded-0 mt-2 "
              placeholder="Enter email(example@mail.com)"
              onChange={(e) => {
                setUserInfo({ ...userInfo, email: e.target.value });
              }}
            />
          </div>
        </div>
      )}

      <div className={`infoOrderText ${iframeSet && "p-0 customBorder"}`}>
        <div className="text-center proceedPay">
          <MixPay
            quoteAssetId="usd"
            quoteAmount="0.1"
            returnUrl="http://localhost:3000/payment/checkout"
            notifyUrl="http://localhost:3000/payment/checkout"
            onIframeSet={handleIframeSet}
            payload={payload}
            userInfo={userInfo}
            locationData={locationData}
          />
        </div>
        {!iframeSet && (
          <>
            <p>
              By clicking{" "}
              <Link
                target="_blank"
                className="proceedLink"
                href="/payment/selectpayment"
                rel="noopener noreferrer"
              >
                {"‘Proceed to payment'"}
              </Link>
              , you agree to Switchive Terms & conditions and Privacy Policy
            </p>
            <p>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input shadow-none link"
                    name=""
                    id=""
                    value="checkedValue"
                  />
                  Keep me updated on the latest news and product offers
                </label>
              </div>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
