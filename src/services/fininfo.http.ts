import type Http from "../utils/http.ts";
import type { dataResponse } from "../utils/http.ts";
import type { GraphqlPayload } from "./fininfo.type.ts";
export type * from "./fininfo.type.ts";

const path = "fininfo";

export function graphql(
  http: Http,
  payload: GraphqlPayload,
): Promise<dataResponse<unknown>> {
  const uri = "/graphql";
  return http.fetch(uri, path, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
export function postOptions(
  http: Http,
  query: string,
): Promise<dataResponse<unknown>> {
  const uri = "/v2/options";
  return http.fetch(uri, path, {
    method: "POST",
    body: query,
  });
}
