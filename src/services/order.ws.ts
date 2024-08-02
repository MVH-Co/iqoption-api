import { placeOrderParams } from "./order.type.ts";
import Ws from "../utils/ws.ts";
export type * from "./order.type.ts";

export type getAllStopLoseOptions = {
  user_balance_id: number;
  instrument_type: string;
};

export type getOptions = {
  user_balance_id: number;
  kind: null | "deferred";
};

export type ChangedOptions = {
  user_id: number;
  instrument_type: string;
};

export type SubscribeOptions = {
  frequency: string;
  ids: string[];
};

export function cancelStopLose(
  ws: Ws,
  order_id: number,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "cancel-order",
      version: "1.0",
      body: { order_id },
    },
    request_id: `${ws.messageId}`,
  });
}

export function getAllStopLose(
  ws: Ws,
  options: getAllStopLoseOptions,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-deferred-orders",
      version: "1.0",
      body: options,
    },
    request_id: `${ws.messageId}`,
  });
}

export function get(
  ws: Ws,
  options: getOptions,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-orders",
      version: "2.0",
      body: {
        ...options,
        kind: options.kind ?? null,
      },
    },
    request_id: `${ws.messageId}`,
  });
}

export function place(
  ws: Ws,
  body: placeOrderParams,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "place-order-temp",
      version: "4.0",
      body: {
        ...body,
        type: "market",
        client_platform_id: 9, // mean your platform is linux
        auto_margin_call: false, // this is "Use Balance to Keep Position Open",if you want take_profit_value and stop_lose_value all be "Not Set",auto_margin_call need to True
        use_trail_stop: true,
        use_token_for_commission: false,
        stop_price: body.stop_price || 0,
        limit_price: body.limit_price || 0,
        stop_lose_value: body.stop_lose_value || 50,
        stop_lose_kind: body.stop_lose_kind || "percent",
        take_profit_kind: body.take_profit_kind || "percent",
      },
    },
    request_id: `${ws.messageId}`,
  });
}

export function changed(
  ws: Ws,
  options: ChangedOptions,
): void {
  ws.send({
    name: "subscribeMessage",
    msg: {
      name: "order-changed",
      version: "2.0",
      params: { routingFilters: options },
    },
    request_id: `s_${ws.subscribeId}`,
  });
}

export function subscribeState(ws: Ws): void {
  ws.send({
    name: "subscribeMessage",
    msg: {
      name: "orders-state",
      version: "1.0",
    },
    request_id: `s_${ws.subscribeId}`,
  });
}

export function subscribe(
  ws: Ws,
  options: SubscribeOptions,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "subscribe-order",
      body: {
        ...options,
        frequency: options.frequency || "frequent",
        ids: options.ids || [],
      },
      version: "1.0",
    },
    request_id: `s_${ws.subscribeId}`,
  });
}
