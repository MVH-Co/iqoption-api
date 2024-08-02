import Ws from "../utils/ws.ts";
export type * from "./position.type.ts";

export type GetPositionsByType = {
  instrument_types: string[] | "all";
  user_balance_id: number;
  limit?: number;
  offset?: number;
};

export type GetHistoryOptions = {
  instrument_type: number;
  user_balance_id: number;
  limit?: number;
  offset?: number;
  start?: number;
  end?: number;
};

export type SubscribeOptions = {
  userId: number;
  userBalanceId: number;
  instrumentType: string;
};

export type UnsubscribeOptions = SubscribeOptions;

export function get(ws: Ws // body?: {
  //   position_id?: number;
  //   // offset = 0,
  //   // limit = 100,
  //   user_balance_id: number;
  //   instrument_types?: string[];
  // },
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-positions",
      version: "4.0",
      body: {
        // offset,
        // limit,
        // position_id,
        // user_balance_id,
        // instrument_types,
      },
    },
    request_id: `${ws.messageId}`,
  });
}

// type "cfd", "digital-option", "binary-option", "turbo-option", "fx-option", "crypto","forex"
export function getByType(
  ws: Ws,
  options: GetPositionsByType,
  // = {
  //   limit: 30,
  //   offset: 0,
  // },
): void {
  if (options.instrument_types === "all") {
    options.instrument_types = [
      "cfd",
      "digital-option",
      "binary-option",
      "turbo-option",
      "fx-option",
      "crypto",
      "forex",
    ];
  }
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-positions",
      version: "4.0",
      body: options,
      //  {

      //   limit,
      //   offset,
      //   instrument_types: instrumentTypes,
      //   user_balance_id: userBalanceId,
      // },
    },
    request_id: `${ws.messageId}`,
  });
}

/**
 * @param provider
 * @param position external id of the position
 * @returns
 */
export function getById(ws: Ws, positionId: number): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-position",
      version: "1.0",
      body: { position_id: positionId },
    },
    request_id: `${ws.messageId}`,
  });
}

export function close(ws: Ws, positionId: number): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "close-position",
      version: "1.0",
      body: { position_id: positionId },
    },
    request_id: `${ws.messageId}`,
  });
}

/**
 * @param provider
 * @param instrument type of the instrument
 * @returns
 */
export function getHistory(
  ws: Ws,
  options: GetHistoryOptions,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-position-history",
      version: "1.0",
      body: options,
    },
    request_id: `${ws.messageId}`,
  });
}

/**
 * @param ids id of the positions in BSON format
 * @param stop
 * @returns
 */
export function subscribeToIds(ws: Ws, ids: string[]): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "subscribe-positions",
      version: "1.0",
      body: {
        frequency: "frequent",
        ids,
      },
    },
    request_id: `${ws.messageId}`,
  });
}

export function subscribe(ws: Ws, options: SubscribeOptions): void {
  ws.send({
    name: "subscribeMessage",
    msg: {
      name: "position-changed",
      version: "3.0",
      params: { routingFilters: options },
    },
    request_id: "s_" + ws.subscribeId,
  });
}

export function unsubscribe(ws: Ws, options: UnsubscribeOptions): void {
  ws.send({
    name: "unsubscribeMessage",
    msg: {
      name: "position-changed",
      version: "3.0",
      params: { routingFilters: options },
    },
    request_id: "s_" + ws.subscribeId,
  });
}

export function subscribeState(ws: Ws): void {
  ws.send({
    name: "subscribeMessage",
    msg: {
      name: "positions-state",
    },
    request_id: "s_" + ws.subscribeId,
  });
}

export function update(ws: Ws, position: number, value: number): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "change-tpsl",
      version: "2.0",
      body: {
        position_id: position,
        stop_lose_kind: "percent",
        stop_lose_value: -value,
        take_profit_kind: "percent",
        take_profit_value: null,
        use_trail_stop: true,
        extra: {
          stop_lose_kind: "percent",
          take_profit_kind: "percent",
        },
      },
      request_id: `${ws.messageId}`,
    },
  });
}
