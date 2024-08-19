export type PaymentMethodsPayload = {
  country_id: number;
  platform_id: number;
  brand_id: number;
};

export type PayoutMethodsPayload = PaymentMethodsPayload;

export type ExternalCard = {
  id: number;
  expiry: string;
  is_oct_enabled: boolean | null;
  number: string;
  owner: string;
  refund_amount: number;
  non_trusted_amount: number;
  iqoption_payment_method_id: number | null;
  hold: number;
  iso_code: string;
  balance_type_id: number | null;
}[];

export type ResetBalanceOptions = {
  user_balance_id?: number;
};
