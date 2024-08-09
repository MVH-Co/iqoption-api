import type Http from "../../utils/http.ts";
import type { dataResponse } from "../../utils/http.ts";
import type { GetFeatures, GetFeaturesQuery } from "./type.ts";
export type * from "./type.ts";

export function get(
  http: Http,
  query: GetFeaturesQuery,
): Promise<dataResponse<GetFeatures>> {
  const uri = "/v2/features";
  return http.fetch(uri, { query });
}
