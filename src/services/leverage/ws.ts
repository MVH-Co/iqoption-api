import type Ws from "../../utils/ws.ts";
import type { GetOptions, SubscribeOptions } from "./type.ts";
export type * from "./type.ts";

export function get(
  ws: Ws,
  options: GetOptions,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-available-leverages",
      version: "2.0",
      body: options,
    },
    request_id: `${ws.messageId}`,
  });
}

/**
 * @param ws
 * @param options
 * @returns
 */
export function subscribe(
  ws: Ws,
  options: SubscribeOptions,
): void {
  ws.send({
    name: "subscribeMessage",
    msg: {
      name: "available-leverages-changed",
      version: "2.0",
      params: {
        routingFilters: {
          ...options,
          user_group_id: options.user_group_id,
        },
      },
    },
    request_id: `s_` + ws.subscribeId,
  });
}

export function unsubscribe(
  ws: Ws,
  options: SubscribeOptions,
): void {
  ws.send({
    name: "unsubscribeMessage",
    msg: {
      name: "available-leverages-changed",
      version: "2.0",
      params: {
        routingFilters: {
          ...options,
          user_group_id: options.user_group_id,
        },
      },
    },
    request_id: `s_` + ws.subscribeId,
  });
}
