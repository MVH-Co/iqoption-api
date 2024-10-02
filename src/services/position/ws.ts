import type Ws from "../../utils/ws.ts";
import type {
  CloseByIdOptions,
  CloseByIdsOptions,
  GetByIDOptions,
  GetHistoryOptions,
  GetPositionsByType,
  SubscribeOptions,
  SubscribeToIdsOptions,
  UnsubscribeOptions,
  UpdateOptions,
} from "./type.ts";
export type * from "./type.ts";

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
    request_id: `${ws.messages.id}`,
  });
}

// type "cfd", "digital-option", "binary-option", "turbo-option", "fx-option", "crypto","forex"
export function getByType(
  ws: Ws,
  options: GetPositionsByType,
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
      body: {
        ...options,
        limit: options.limit ?? 30,
        offset: options.offset ?? 0,
      },
      //  {

      //   limit,
      //   offset,
      //   instrument_types: instrumentTypes,
      //   user_balance_id: userBalanceId,
      // },
    },
    request_id: `${ws.messages.id}`,
  });
}

/**
 * @param provider
 * @param position external id of the position
 * @returns
 */
export function getById(ws: Ws, options: GetByIDOptions): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "get-position",
      version: "1.0",
      body: options,
    },
    request_id: `${ws.messages.id}`,
  });
}

export function close(ws: Ws, options: CloseByIdOptions): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "close-position",
      version: "1.0",
      body: options,
    },
    request_id: `${ws.messages.id}`,
  });
}

export function closeBatch(ws: Ws, options: CloseByIdsOptions) {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "close-position-batch",
      version: "1.0",
      body: options,
    },
    request_id: `${ws.messages.id}`,
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
    request_id: `${ws.messages.id}`,
  });
}

/**
 * @param ids id of the positions in BSON format
 * @param stop
 * @returns
 */
export function subscribeToIds(ws: Ws, options: SubscribeToIdsOptions): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "subscribe-positions",
      version: "1.0",
      body: {
        ...options,
        frequency: options.frequency ?? "frequent",
      },
    },
    request_id: `${ws.messages.id}`,
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
    request_id: "s_" + ws.subscribe.id,
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
    request_id: "s_" + ws.subscribe.id,
  });
}

export function subscribeState(ws: Ws): void {
  ws.send({
    name: "subscribeMessage",
    msg: {
      name: "positions-state",
    },
    request_id: "s_" + ws.subscribe.id,
  });
}

export function update(ws: Ws, options: UpdateOptions): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "change-tpsl",
      version: "2.0",
      body: {
        ...options,
        position_id: options.position_id,
        stop_lose_kind: options.stop_lose_kind ?? "percent",
        stop_lose_value: -options.stop_lose_value,
        take_profit_kind: options.take_profit_kind ?? "percent",
        take_profit_value: options.take_profit_value ?? null,
        use_trail_stop: options.use_trail_stop ?? true,
        extra: {
          stop_lose_kind: options.extra?.stop_lose_kind ?? "percent",
          take_profit_kind: options.extra?.take_profit_kind ?? "percent",
        },
      },
      request_id: `${ws.messages.id}`,
    },
  });
}
