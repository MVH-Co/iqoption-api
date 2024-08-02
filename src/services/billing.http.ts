import Http, { dataResponse } from "../utils/http.ts";

const path = "billing";

export function buyback(http: Http): Promise<dataResponse<unknown>> {
  const uri = "/buyback";
  return http.fetch(uri, path, { method: "POST" });
}

export function getCard(http: Http): Promise<dataResponse<unknown>> {
  const uri = "/external/card";
  return http.fetch(uri, path, { method: "POST" });
}

export function paymentMethods(http: Http, payload: {
  country_id: number;
  platform_id: number;
  brand_id: number;
}): Promise<dataResponse<unknown>> {
  const uri = "/external/get-payment-methods";
  const body = JSON.stringify(payload);
  return http.fetch(uri, path, { method: "POST", body });
}

export function payoutMethods(http: Http, payload: {
  country_id: number;
  platform_id: number;
  brand_id: number;
}): Promise<dataResponse<unknown>> {
  const uri = "/external/get-payload-methods";
  const body = JSON.stringify(payload);
  return http.fetch(uri, path, { method: "POST", body });
}
