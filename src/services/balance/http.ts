import type Http from "../../utils/http.ts";
import type { dataResponse } from "../../utils/http.ts";
import type { PostPayload } from "./type.ts";
export type * from "./type.ts";

export function post(
  http: Http,
  payload: PostPayload,
): Promise<dataResponse<unknown>> {
  const method = "POST";
  const uri = "/changebalance";
  const body = JSON.stringify(payload);
  return http.fetch(uri, undefined, { method, body });
}
