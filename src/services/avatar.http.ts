import type Http from "../utils/http.ts";
import type { dataResponse } from "../utils/http.ts";
import type { avatar } from "./avatar.type.ts";

const path = "avatars";

export function get(
  http: Http,
  current = false,
): Promise<dataResponse<avatar>> {
  const uri = "/v1/avatars" +
    (current ? "/current" : "");
  return http.fetch(uri, path);
}
