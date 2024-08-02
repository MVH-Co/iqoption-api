import Ws from "../utils/ws.ts";
import { instrumentType } from "./instrument.type.ts";
export type * from "./core.type.ts";

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

export function getCommissions(ws: Ws): void {
  ws.send({
    name: "get-commissions",
    version: "1.0",
    body: { instrument_type: "fx-option", user_group_id: 197 },
  });
}

export function subscribeCommission(
  ws: Ws,
  instrumentType: instrumentType,
): void {
  ws.send({
    name: "commission-changed",
    version: "1.0",
    params: {
      routingFilters: { instrument_type: instrumentType, user_group_id: 197 },
    },
  });
}

export function getOvernightFee(
  ws: Ws,
  userGroup: number,
  instrumentType: instrumentType,
  active: number,
): void {
  ws.send({
    name: "sendMessage",
    body: {
      name: "get-overnight-fee",
      version: "1.0",
      body: {
        user_group_id: userGroup,
        instrument_type: instrumentType,
        active_id: active,
      },
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
    request_id: `${ws.messageId}`,
  });
}

export function heartbeat(ws: Ws, beat: number, localTime: number): void {
  ws.send({
    name: "heartbeat",
    msg: {
      userTime: Date.now(),
      heartbeatTime: beat,
    },
    request_id: `${ws.messageId}`,
    local_time: localTime,
  });
}

export function setActive(ws: Ws, beat: number, localTime: number): void {
  ws.send({
    name: "heartbeat",
    msg: {
      userTime: Date.now(),
      heartbeatTime: beat,
    },
    request_id: `${ws.messageId}`,
    local_time: localTime,
  });
}
