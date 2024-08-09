import type Ws from "../../utils/ws.ts";
export type { Authenticate } from "./type.ts";

export function authenticate(ws: Ws): void {
  const now = Date.now();
  ws.send({
    name: "authenticate",
    msg: {
      ssid: ws.http.token,
      protocol: 3,
    },
    request_id: `${ws.messageId}`,
    local_time: now - Math.floor(now / 1000000) * 1000000,
  });
}
