import React, { useEffect, useState } from "react";
import mixpayjs from "mixpayjs";
import { toast } from "react-toastify";
import { useMixPayAPI } from "@/api/mixPay";
import { initializeOrderAPI } from "@/api/orders";
import { IMixPayProps, IPayloadProps } from "@/types/mixpayTypes";

const MixPay: React.FC<IMixPayProps> = ({
  quoteAssetId,
  quoteAmount,
  returnUrl,
  notifyUrl,
  onIframeSet,
  payload: OrderPayload,
  userInfo,
  locationData,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);

  const settlementAssetId = process.env.NEXT_PUBLIC_MIXPAY_USDT_ASSET;
  const payeeId = process.env.NEXT_PUBLIC_MIXPAY_PAYEE_ID;
  const mixPayUrl = process.env.NEXT_PUBLIC_MIXPAY;
  const amount = 0.17;
  const [orderId, setOrderId] = useState("");

  const paymentLink = `${mixPayUrl}?payeeId=${payeeId}&orderId=${orderId}&settlementAssetId=${settlementAssetId}&quoteAssetId=${quoteAssetId}&quoteAmount=${amount}&style=iframe`;
  const payload = { orderId, payeeId } as IPayloadProps;
  const {
    data,
    isLoading,
    error: mixPayError,
  } = useMixPayAPI(payload, !!iframeSrc);

  OrderPayload = OrderPayload?.map(
    (item: { id: any; amount: any; quantity: any }, index: number) => ({
      accountNumber: "",
      amount: item?.amount,
      quantity: item?.quantity,
    })
  );

  const createPaymentLink = async () => {
    try {
      setLoading(true);
      setError(null);
      // initialize Payment
      const newPayload = {
        email: userInfo?.email,
        countryCode: locationData?.country,
        countryName: locationData?.countryName,
        coupon: userInfo?.coupon,
        data: OrderPayload,
      };
      const response = await initializeOrderAPI(newPayload);
      if (response?.data) {
        setTimeout(() => {
          setIframeSrc(paymentLink);
          onIframeSet(true);
          setLoading(false);
        }, 2000);
      } else if (response?.response?.status === 400) {
        setLoading(false);
        toast.error(response?.response?.data?.message[0]);
      } else {
        toast.error("System is busy now, try again later!");
        setLoading(false);
      }
    } catch (err) {
      setError("Failed to create payment link");
      toast.error("Failed to create payment link");
      onIframeSet(false);
      setLoading(false);
    }
  };
  // console.debug(userInfo?.email);
  return (
    <div className="p-0 m-0">
      <button
        onClick={createPaymentLink}
        disabled={loading}
        className="btn btn-primary px-5"
      >
        {loading ? (
          <>
            <span
              className="spinner-border spinner-border-sm mr-1"
              role="status"
              aria-hidden="true"
            ></span>
            {"  initializing Payment.."}
          </>
        ) : (
          "Pay Now"
        )}
      </button>

      {iframeSrc && (
        <iframe
          src={iframeSrc}
          width="100%"
          height="640"
          title="Payment"
          style={{ border: "1px solid grey", borderRadius: ".4rem" }}
        ></iframe>
      )}
    </div>
  );
};

export default MixPay;
