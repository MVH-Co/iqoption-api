import type Ws from "../utils/ws.ts";
import type {
  GetOptions,
  SubscribeOptions,
  UnsubscribeOptions,
} from "./candle.type.ts";
export type * from "./candle.type.ts";

export function get(
  ws: Ws,
  options: GetOptions,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-candles",
      version: "2.0",
      body: {
        ...options,
        split_normalization: true,
        only_closed: true,
      },
    },
    request_id: `${ws.messageId}`,
  });
}

export function subscribe(
  ws: Ws,
  options: SubscribeOptions = {
    size: 60,
  },
): void {
  ws.send({
    name: "subscribeMessage",
    msg: {
      name: "candle-generated",
      params: { routingFilters: options },
    },
    request_id: `s_` + ws.subscribeId,
  });
}

export function getFirst(
  ws: Ws,
  activeId: number,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-first-candles",
      version: "1.0",
      body: {
        active_id: activeId,
        split_normalization: true,
      },
    },
    request_id: `${ws.messageId}`,
  });
}

export function unsubscribe(
  ws: Ws,
  options: UnsubscribeOptions = { size: 60 },
): void {
  ws.send({
    name: "unsubscribeMessage",
    msg: {
      name: "candle-generated",
      params: { routingFilters: options },
    },
    request_id: `s_` + ws.subscribeId,
  });
}
