import type Http from "../../utils/http.ts";
import type { dataResponse } from "../../utils/http.ts";
import type { PaymentMethodsPayload, PayoutMethodsPayload } from "./type.ts";

const path = "billing";

export function buyback(http: Http): Promise<dataResponse<unknown>> {
  const uri = "/buyback";
  return http.fetch(uri, { path, options: { method: "POST" } });
}

export function getCard(http: Http): Promise<dataResponse<unknown>> {
  const uri = "/external/card";
  return http.fetch(uri, { path, options: { method: "POST" } });
}

export function paymentMethods(
  http: Http,
  payload: PaymentMethodsPayload,
): Promise<dataResponse<unknown>> {
  const uri = "/external/get-payment-methods";
  const body = JSON.stringify(payload);
  return http.fetch(uri, { path, options: { method: "POST", body } });
}

export function payoutMethods(
  http: Http,
  payload: PayoutMethodsPayload,
): Promise<dataResponse<unknown>> {
  const uri = "/external/get-payload-methods";
  const body = JSON.stringify(payload);
  return http.fetch(uri, { path, options: { method: "POST", body } });
}
