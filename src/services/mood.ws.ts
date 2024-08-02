import type Ws from "../utils/ws.ts";
export type * from "./mood.type.ts";

export type SubscribeOptions = {
  instrument: string;
  asset_id: number;
};

export type GetOptions = SubscribeOptions;

export type UnsubscribeOptions = SubscribeOptions;

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
    request_id: `${ws.messageId}`,
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
    request_id: "s_" + ws.subscribeId,
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
    request_id: "s_" + ws.subscribeId,
  });
}
