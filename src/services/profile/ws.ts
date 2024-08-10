import type Ws from "../../utils/ws.ts";
import type {
  AvailabilityOptions,
  GetUserInfoOptions,
  UserProfileClientOptions,
} from "./type.ts";
export type * from "./type.ts";

export function get(ws: Ws): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-profile",
      version: "1.0",
    },
    request_id: `${ws.messages.id}`,
  });
}

export function subscribe(ws: Ws): void {
  ws.send({
    name: "subscribeMessage",
    msg: {
      name: "profile-changed",
      version: "1.0",
    },
    request_id: "s_" + ws.subscribe.id,
  });
}

export function unsubscribe(ws: Ws): void {
  ws.send({
    name: "unsubscribeMessage",
    msg: {
      name: "profile-changed",
      version: "1.0",
    },
    request_id: "s_" + ws.subscribe.id,
  });
}

export function availability(
  ws: Ws,
  options: AvailabilityOptions,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-users-availability",
      version: "1.0",
      body: options,
    },
    request_id: `${ws.messages.id}`,
  });
}

export function getUserInfo(
  ws: Ws,
  options: GetUserInfoOptions,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "request-leaderboard-userinfo-deals-client",
      version: "1.0",
      body: options,
    },
    request_id: `${ws.messages.id}`,
  });
}

export function userProfileClient(
  ws: Ws,
  options: UserProfileClientOptions,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-user-profile-client",
      version: "1.0",
      body: options,
    },
    request_id: `${ws.messages.id}`,
  });
}

// export function userSettings(
//   // userId: number,
//   requestId: number,
// ): Record<string, unknown> {
//   return {
//     name: "sendMessage",
//     msg: {
//       name: "get-user-settings",
//       version: "2.0",
//       body: {
//         configs: [
//           // { name: 'traderoom_gl', version: 2 },
//           // { name: 'traderoom_gl_welcome', version: 1 },
//           // { name: 'traderoom_gl_common', version: 4 },
//           // { name: 'traderoom_gl_trading', version: 4 },
//           // { name: 'traderoom_gl_grid', version: 2 },
//           // { name: 'traderoom_gl_commissions', version: 1 },
//           // { name: 'traderoom_gl_fav_assets', version: 1 },
//           // { name: 'privacy-settings', version: 1 },
//           // { name: 'traderoom_gl_shortcuts', version: 1 },
//           // { name: 'yearly_fee', version: 1 },
//           // { name: 'leaderboard', version: 1 },
//         ],
//       },
//     },
//     request_id: `${requestId}`,
//   };
// }

// export function setUserSettings(
//   settings: Record<never, never>,
//   requestId: number,
// ): Record<string, unknown> {
//   return {
//     name: "sendMessage",
//     msg: {
//       name: "set-user-settings",
//       version: "1.0",
//       body: {
//         name: "traderoom_gl_common",
//         version: 4,
//         client_id: "1664399942986000",
//         config: settings,
//       },
//     },
//     request_id: `${requestId}`,
//   };
// }
