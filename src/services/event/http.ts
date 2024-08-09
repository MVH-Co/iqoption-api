import type Http from "../../utils/http.ts";
import type { dataResponse } from "../../utils/http.ts";

const path = "event";

export function options(http: Http): Promise<dataResponse<unknown>> {
  const uri = "/v1/events";
  return http.fetch(uri, { path, options: { method: "OPTIONS" } });
}
