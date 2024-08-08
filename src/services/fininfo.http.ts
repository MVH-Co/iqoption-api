import type Http from "../utils/http.ts";
import type { dataResponse } from "../utils/http.ts";

const path = "fininfo";

export type GraphqlPayload = {
  operationName: string;
  variables: Record<never, never>;
  query: string;
};

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
