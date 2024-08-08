import type Http from "../utils/http.ts";
import type { dataResponse } from "../utils/http.ts";
export type * from "./balance.type.ts";

export function post(
  http: Http,
  balanceId: number,
): Promise<dataResponse<unknown>> {
  const method = "POST";
  const uri = "/changebalance";
  const body = JSON.stringify({ "balance_id": balanceId });
  return http.fetch(uri, undefined, { method, body });
}
