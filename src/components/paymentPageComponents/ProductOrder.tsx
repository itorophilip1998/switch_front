import React from "react";
import CustomImage from "../CustomImage";
import { RxCopy } from "react-icons/rx";
import ReviewForm from "../ReviewForm";

export default function ProductOrder({ index }: { index: number }) {
  return (
    <div className="ProductOrder">
      <div className="productDetailed">
        <div className="headText">
          <CustomImage src="/payment/productLogo.svg" />
          <span>$45.00</span>
        </div>

        <div className="pinBox">
          <span className="pin">PIN</span>
          <span className="code">ABCD-1234-ABCD</span>
          <RxCopy className="copy link zoom" />
        </div>
        <div className="pinBox">
          <span className="pin">PIN</span>
          <span className="code">ABCD-1234-ABCD</span>
          <RxCopy className="copy link zoom" />
        </div>
      </div>
      <div className="text-center">
        <a
          className="btn text-white"
          data-bs-toggle="collapse"
          href={`#ReviewFormID${index}`}
          aria-expanded="false"
          aria-controls="ReviewFormID"
        >
          Leave Review
        </a>
      </div>
      <div className="collapse col-md-8 mx-auto" id={`ReviewFormID${index}`}>
        <ReviewForm productId={"1"} />
      </div>
    </div>
  );
}
