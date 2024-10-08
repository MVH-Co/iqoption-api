import type Ws from "../../utils/ws.ts";
export type * from "./type.ts";

import type {
  GetOptions,
  SubscribeOptions,
  UnsubscribeOptions,
} from "./type.ts";

export function get(
  ws: Ws,
  options: GetOptions,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-traders-mood",
      version: "1.0",
      body: options,
    },
    request_id: `${ws.messages.id}`,
  });
}

export function subscribe(
  ws: Ws,
  options: SubscribeOptions,
): void {
  ws.send({
    name: "subscribeMessage",
    msg: {
      name: "traders-mood-changed",
      version: "1.0",
      params: { routingFilters: { options } },
    },
    request_id: "s_" + ws.subscribe.id,
  });
}

export function unsubscribe(
  ws: Ws,
  options: UnsubscribeOptions,
): void {
  ws.send({
    name: "unsubscribeMessage",
    msg: {
      name: "traders-mood-changed",
      version: "1.0",
      params: { routingFilters: { options } },
    },
    request_id: "s_" + ws.subscribe.id,
  });
}
