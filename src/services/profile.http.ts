import Http, { dataResponse } from "../utils/http.ts";
import { profile } from "./profile.type.ts";
export type * from "./profile.type.ts";

export function get(http: Http): Promise<dataResponse<profile>> {
  const uri = "/getprofile";
  return http.fetch(uri);
}
