import type Ws from "../utils/ws.ts";
import type { instrumentType } from "./instrument.type.ts";

export function get(
  ws: Ws,
  instrument_type: instrumentType,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-available-leverages",
      version: "2.0",
      body: { instrument_type },
    },
    request_id: `${ws.messageId}`,
  });
}

export function subscribe(
  ws: Ws,
  instrumentType: instrumentType,
): void {
  ws.send({
    name: "subscribeMessage",
    msg: {
      name: "available-leverages-changed",
      version: "2.0",
      params: {
        routingFilters: {
          instrument_type: instrumentType,
          user_group_id: 197,
        },
      },
    },
    request_id: `s_` + ws.subscribeId,
  });
}

export function unsubscribe(
  ws: Ws,
  instrumentType: instrumentType,
): void {
  ws.send({
    name: "unsubscribeMessage",
    msg: {
      name: "available-leverages-changed",
      version: "2.0",
      params: {
        routingFilters: {
          instrument_type: instrumentType,
          user_group_id: 197,
        },
      },
    },
    request_id: `s_` + ws.subscribeId,
  });
}
