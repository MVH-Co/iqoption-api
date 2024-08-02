import Http, { dataResponse } from "../utils/http.ts";
// // query ?category=platform-4
export function get(http: Http): Promise<dataResponse<unknown>> {
  const uri = "/v2/features";
  return http.fetch(uri);
}
