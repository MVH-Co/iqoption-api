import type Http from "../utils/http.ts";
import type { dataResponse } from "../utils/http.ts";
import type { profile } from "./profile.type.ts";

export function get(http: Http): Promise<dataResponse<profile>> {
  const uri = "/getprofile";
  return http.fetch(uri);
}
