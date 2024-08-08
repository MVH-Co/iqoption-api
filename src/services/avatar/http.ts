import type Http from "../../utils/http.ts";
import type { dataResponse } from "../../utils/http.ts";
import type { avatar, GetPayload } from "./type.ts";
export type * from "./type.ts";

const path = "avatars";

export function get(
  http: Http,
  payload: GetPayload = { current: false },
): Promise<dataResponse<avatar>> {
  let uri = "/v1/avatars";
  uri += payload.current ? "/current" : "";
  return http.fetch(uri, path);
}