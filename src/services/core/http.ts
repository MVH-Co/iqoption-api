import type Http from "../../utils/http.ts";
import type { dataResponse } from "../../utils/http.ts";
import type {
  configuration,
  contactInfo,
  countries,
  currencies,
  manager,
  regData,
  timezone,
} from "../core/type.ts";
export type * from "../core/type.ts";

export function getCurrencies(http: Http): Promise<dataResponse<currencies>> {
  const uri = "/currencies/v5";
  return http.fetch(uri);
}

export function getTimezones2(
  http: Http,
): Promise<dataResponse<timezone>> {
  const uri = "/timezones2";
  return http.fetch(uri);
}

export function getRegData(http: Http): Promise<dataResponse<regData>> {
  const path = "/register/getregdata";
  return http.fetch(path);
}

export function getCountries(
  http: Http,
): Promise<dataResponse<countries>> {
  const path = "/v5/countries";
  return http.fetch(path);
}

export function getContactInfo(http: Http): Promise<dataResponse<contactInfo>> {
  const path = "/getcontactinfo";
  return http.fetch(path);
}

export function getConfiguration(
  http: Http,
): Promise<dataResponse<configuration>> {
  const path = "/configuration";
  return http.fetch(path);
}

export function getManager(http: Http): Promise<dataResponse<manager>> {
  const path = "/manager/get";
  return http.fetch(path);
}
