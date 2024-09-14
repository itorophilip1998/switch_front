import CustomImage from "@/components/CustomImage";
import ProductOrder from "@/components/paymentPageComponents/ProductOrder";
import React from "react"; 

export default function page() {
  return (
    <div className="orderCompleted col-md-5 mx-auto">
      <div className="order-success">
        <CustomImage src="/payment/check-mark.svg" />
        <span className="hText ">Order Completed</span>
        <p>Thank you for your purchase</p>
      </div>
      {Array.from({ length: 4 }, (_, index) => (
          <ProductOrder key={index} index={index}  />
      ))}
    </div>
  );
}
