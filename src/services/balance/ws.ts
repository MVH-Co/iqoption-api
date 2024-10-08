import type Ws from "../../utils/ws.ts";
import type { GetOptions } from "./type.ts";
export type * from "./type.ts";

/**
 * @description Get balances for given ids
 * @param types_ids : number[] = 1 - Real, 4 - Demo
 * @returns
 */
export function get(ws: Ws, options: GetOptions): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-balances",
      version: "1.0",
      body: options,
    },
    request_id: `${ws.messages.id}`,
  });
}

export function subscribe(ws: Ws): void {
  ws.send({
    name: "subscribeMessage",
    msg: {
      name: "balance-changed",
      version: "1.0",
    },
    request_id: "s_" + ws.subscribe.id,
  });
}

export function unsubscribe(ws: Ws): void {
  ws.send({
    name: "unsubscribeMessage",
    msg: {
      name: "balance-changed",
      version: "1.0",
    },
    request_id: "s_" + ws.subscribe.id,
  });
}

// export function created() {
//   return {
//     name: "internal-billing.auth-balance-created",
//     version: "1.0",
//   };
// }

// internal-billing.marginal-changed

// export function subscribe() {
//   return {
//     name: "internal-billing.auth-balance-changed",
//     version: "1.0",
//   };
// }
