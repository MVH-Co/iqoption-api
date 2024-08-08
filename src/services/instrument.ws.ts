import type Ws from "../utils/ws.ts";
import type { instrumentType } from "./instrument.type.ts";

export function get(ws: Ws, type: instrumentType): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-instruments",
      version: "4.0",
      body: { type },
    },
    request_id: `${ws.messageId}`,
  });
}

export function subscribe(ws: Ws, type: instrumentType): void {
  ws.send({
    name: "subscribeMessage",
    msg: {
      name: "instruments-changed",
      version: "5.0",
      params: {
        routingFilters: {
          user_group_id: 197,
          type,
          is_regulated: true,
        },
      },
    },
    request_id: "s_" + ws.subscribeId,
  });
}

export function unsubscribe(ws: Ws, type: instrumentType): void {
  ws.send({
    name: "unsubscribeMessage",
    msg: {
      name: "instruments-changed",
      version: "5.0",
      params: {
        routingFilters: {
          user_group_id: 197,
          type,
          is_regulated: true,
        },
      },
    },
    request_id: "s_" + ws.subscribeId,
  });
}

// import {ws} from "@/api/deps.ts"

// export function get = ( _type: string): void
//
//     name: "fx-option-instruments.get-underlying-list",
//     version: "1.0",
//     body: {
//       filter_suspended: true,
//     },
// }

// export function subscribe = (
//
//   type: string,
//
// ): void
//
//     {
//       name: "fx-option-instruments.underlying-list-changed",
//       version: "1.0",
//       params: {
//         routingFilters: { "user_group_id": 197, "is_regulated": true },
//       },
//     },
//   );
