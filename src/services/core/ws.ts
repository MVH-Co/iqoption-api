import type Ws from "../../utils/ws.ts";
import type {
  GetCommissionOptions,
  GetOvernightFeeOptions,
  HeartbeatOptions,
  SubscribeCommissionOptions,
} from "./type.ts";

export type * from "../core/type.ts";

// export function get(name: string) {
//   return {
//     name: "get-currency",
//     version: "5.0",
//     body: { name: name },
//   }
// }

// export function getAll() {
//   return {
//     name: "get-currencies-list", version: "5.0"
//   }
// }

// export function subscribe(name: string) {
//   return {
//     name: "currency-updated",
//     version: "5.0",
//     params: { routingFilters: { name: name } },
//   }
// }

export function getCommissions(ws: Ws, options: GetCommissionOptions): void {
  ws.send({
    name: "get-commissions",
    version: "1.0",
    body: options,
  });
}

export function subscribeCommission(
  ws: Ws,
  options: SubscribeCommissionOptions,
): void {
  ws.send({
    name: "commission-changed",
    version: "1.0",
    params: {
      routingFilters: {
        ...options,
        user_group_id: options.user_group_id,
      },
    },
  });
}

export function getOvernightFee(
  ws: Ws,
  options: GetOvernightFeeOptions,
): void {
  ws.send({
    name: "sendMessage",
    body: {
      name: "get-overnight-fee",
      version: "1.0",
      body: options,
    },
  });
}

/**
 * @param request_id
 * @param local_time timestamp in ms
 * @returns
 */
export function setOptions(ws: Ws): void {
  ws.send({
    name: "setOptions",
    msg: { sendResults: true },
    request_id: `${ws.messages.id}`,
  });
}

export function heartbeat(ws: Ws, options: HeartbeatOptions): void {
  ws.send({
    name: "heartbeat",
    msg: {
      userTime: Date.now(),
      heartbeatTime: options.heartbeat,
    },
    request_id: `${ws.messages.id}`,
    local_time: options.localTime,
  });
}
