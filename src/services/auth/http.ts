import type Http from "../../utils/http.ts";
import type { dataResponse } from "../../utils/http.ts";
import type {
  check2FAPayload,
  login,
  LoginPayload,
  logout,
  session,
  set2FAMethodPayload,
} from "./type.ts";
export type * from "./type.ts";

const path = "auth";

/**
 * @param payload token if 2FA or identifier and password else
 * @returns
 */
export function login(
  http: Http,
  payload: LoginPayload,
): Promise<dataResponse<login>> {
  const { identifier, password } = payload;
  const uri = "/v2/login";
  const body = JSON.stringify({ identifier, password });
  return http.fetch(uri, path, { method: "POST", body });
}

export function logout(http: Http): Promise<dataResponse<logout>> {
  const uri = "/v1.0/logout";
  return http.fetch(uri, path, { method: "POST" });
}

export function session(http: Http): Promise<dataResponse<session>> {
  const uri = "/v4/check-session";
  return http.fetch(uri, path);
}

export function ask2FA(http: Http, payload: {
  method: "sms" | "push" | "email";
  token: string;
}): Promise<dataResponse<unknown>> {
  const uri = "/v2/verify/2fa";
  const body = JSON.stringify(payload);
  return http.fetch(uri, path, { method: "POST", body });
}

export function check2FA(
  http: Http,
  payload: check2FAPayload,
): Promise<dataResponse<unknown>> {
  const uri = "/v2/verify/2fa";
  const body = JSON.stringify(payload);
  return http.fetch(uri, path, { body });
}

export function get2FAMethod(http: Http): Promise<dataResponse<unknown>> {
  const uri = "/v3/get-2fa-methods";
  return http.fetch(uri, path, { method: "POST" });
}

export function set2FAMethod(
  http: Http,
  payload: set2FAMethodPayload,
): Promise<dataResponse<unknown>> {
  const uri = "/v2/change/2fa";
  const body = JSON.stringify(payload);
  return http.fetch(uri, path, { method: "POST", body });
}
