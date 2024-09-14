"use client"
import React from "react";
import CustomImage from "@/components/CustomImage";
import { cryptoPayment } from "@/utils/dummy";
import { AiOutlineClose } from "react-icons/ai";
// import {useRouter} from "next/navigation"
interface CryptoPaymentProps {
  name: string;
  imageLink: string;
}

export default function Page() {
  const navigate = () => {
    location.href = "/payment/ordercompleted";
  }
  return (
    <div className="container selectPayment ">
      <p className="text-bold">Select Payment Method</p>
      {/* items */}
      <div className="cryptoDex">
        {cryptoPayment?.map((item: CryptoPaymentProps, key: number) => (
          <div key={key} className="listBoard link zoom">
            <CustomImage src={item?.imageLink} />
            <span>{item?.name}</span>
          </div>
        ))}
      </div>
      <div className="cryptoDex">
        <button
          className="btn-primary btn shadow"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          Pay with Balance
        </button>
      </div>

      <div
        className="modal fade"
        id="modalId"
        // tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-end border-0  ">
              <button
                type="button"
                className="btn-Close btn  "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="modal-body border-0 mt-0 pt-0">
              <div className="form-group">
                <label>Account Balance</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="$12,354.00"
                />
                <small id="helpId" className="form-text text-muted d-none">
                  Help text
                </small>
              </div>
              <div className="form-group">
                <label>Rewards Balance</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="$12,354.00"
                />
                <small id="helpId" className="form-text text-muted d-none">
                  Help text
                </small>
              </div>
              <div className="form-group">
                <label>Both</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="$12,354.00"
                />
                <small id="helpId" className="form-text text-muted d-none">
                  Help text
                </small>
              </div>
              <button
                className="btn btn-primary mt-3 px-4"
                data-bs-dismiss="modal"
                type="button"
                onClick={() => navigate}
              >
                Pay $400
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
