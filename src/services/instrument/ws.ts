import type Ws from "../../utils/ws.ts";
import type { GetOptions, SubscribeOptions } from "./type.ts";
export type * from "./type.ts";

export function get(ws: Ws, options: GetOptions): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-instruments",
      version: "4.0",
      body: options,
    },
    request_id: `${ws.messages.id}`,
  });
}

export function subscribe(ws: Ws, options: SubscribeOptions): void {
  ws.send({
    name: "subscribeMessage",
    msg: {
      name: "instruments-changed",
      version: "5.0",
      params: {
        routingFilters: {
          ...options,
          user_group_id: options.user_group_id,
          is_regulated: options.is_regulated ?? true,
        },
      },
    },
    request_id: "s_" + ws.subscribe.id,
  });
}

export function unsubscribe(ws: Ws, options: SubscribeOptions): void {
  ws.send({
    name: "unsubscribeMessage",
    msg: {
      name: "instruments-changed",
      version: "5.0",
      params: {
        routingFilters: {
          ...options,
          user_group_id: options.user_group_id,
          is_regulated: options.is_regulated ?? true,
        },
      },
    },
    request_id: "s_" + ws.subscribe.id,
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
