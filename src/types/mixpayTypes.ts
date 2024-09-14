import { AxiosResponse } from "axios";

export enum FX_SLUGS {
  SOCHITEL_PAYMENT = "sochitel-payment",
  SWITCHIVE_SP_PAYMENT = "switchive-sp-payment",
  SWITCHIVE_GIFT_CARD_PAYMENT = "switchive-gift-card-payment",
  NAIRA_PAYMENT = "naira-payment",
}

export type FxRate = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  slug: FX_SLUGS;
  value: number;
};

export type ConvertRate = {
  currency: string;
  value: number;
  symbol: string;
  dollarConversionRate: number;
  iconUrl: string;
};

export type InputSelectProps = {
  data: ConvertRate[];
  onSelectionChange: (selected: ConvertRate | null) => void;
};

export type Category = {
  id: number;
  name: string;
  // Add other category fields here
};

export type CategoriesResponse = {
  data: Category[];
};

export type IPResponse = {
  ip: AxiosResponse<IPResponse, any>;
};

export type LocationResponse = {
  country: string;
  countryName: string;
};

export type UserInfo = {
  email: string;
  coupon: string;
};
export type ILocationData = {
  email: string;
  coupon: string;
};

export type IMixPayProps = {
  quoteAmount: string;
  returnUrl: string;
  notifyUrl: string;
  quoteAssetId: string;
  onIframeSet: (isSet: boolean) => void;
  payload: IPayloadProps;
  locationData?: any;
  userInfo: {
    email: string;
    coupon: string;
  };
};

export type IPayloadProps = {
  map: any;
  orderId: string;
  payeeId: string;
};
