import type { instrumentType } from "../instrument/type.ts";
import type { order } from "../order/type.ts";

export type positionState = {
  id: string;
  instrument_type: instrumentType;
  sell_profit: number;
  margin: number;
  current_price: number;
  quote_timestamp: number;
  pnl: number;
  pnl_net: number;
  open_price: number;
  expected_profit: number;
};

type positionCommon = {
  instrument_id_escape: string;
  instrument_type: instrumentType;
  instrument_id: string;
  instrument_underlying: string;
  instrument_active_id: number;
  instrument_strike: null | unknown;
  id: number;
  user_id: number;
  create_at: number;
  update_at: number;
  close_at: null | number;
  type: "short" | "long";
  leverage: number;
  count: number;
  count_realized: number;
  buy_amount: number;
  sell_amount: number;
  buy_amount_enrolled: number;
  sell_amount_enrolled: number;
  commission_amount: number;
  commission: number;
  commission_enrolled: number;
  close_reason: null | string;
  open_underlying_price: number;
  pnl_realized: number;
  pnl_realized_enrolled: number;
  buy_avg_price: number;
  buy_avg_price_enrolled: number;
  sell_avg_price: number;
  sell_avg_price_enrolled: number;
  stop_lose_order_id: number;
  take_profit_order_id: null | number;
  currency: string;
  margin: number;
  margin_call: number;
  margin_call_enrolled: number;
  swap: number;
  swap_enrolled: number;
  custodial: number;
  custodial_enrolled: number;
  user_group_id: number;
  charge: number;
  charge_enrolled: number;
  orders: number[];
  open_client_platform_id: number;
  extra_data: extraData;
  last_index: number;
  open_quote_final_ask: number;
  open_quote_final_bid: number;
};

export type position = positionCommon & {
  last_change_reason: string;
  instrument_strike_value: null | unknown;
  instrument_expiration: null | unknown;
  instrument_percent: null | unknown;
  instrument_period: null | unknown;
  instrument_dir: null | unknown;
  tpsl_extra: null | Record<never, never>;
  close_effect_amount: null | number;
  close_effect_amount_enrolled: null | number;
  close_underlying_price: null | number;
  currency_unit: number;
  currency_rate: number;
  custodial_last_age: number;
  user_balance_id: number;
  user_balance_type: number;
  order_ids: number[];
  status: string;
};

export type positionClosed = { id: number };
export type closePosition = { position_id: number };
export type positions = {
  positions: position[];
  total: number;
  limit: number;
};

export type positionOrders = {
  position: position;
  orders: order[];
};

export type positionsState = {
  positions: positionState[];
  subscription_id: number;
  user_id: number;
  expires_in: number;
};

export type extraData = {
  amount: number;
  version: string;
  init_time: number;
  stop_lose_kind: string;
  use_trail_stop: boolean;
  stop_lose_price: number;
  stop_lose_value: number;
  auto_margin_call: boolean;
  take_profit_price: null | number;
  last_change_reason: string;
  stop_out_threshold: number;
  use_token_for_commission: boolean;
  paid_for_commission: number;
  paid_for_commission_enrolled: number;
};

export type positionData = {
  raw_event: {
    [key: string]: rawEvent;
  };
  active_id: number;
  current_price: number;
  expected_profit: number;
  expected_profit_enrolled: number;
  external_id: number;
  id: string;
  instrument_id: string;
  instrument_type: instrumentType;
  invest: number;
  invest_enrolled: number;
  open_quote: number;
  open_time: number;
  platform_id: number;
  pnl: number;
  pnl_enrolled: number;
  pnl_net: number;
  pnl_net_enrolled: number;
  quote_timestamp: number;
  sell_profit: number;
  sell_profit_enrolled: number;
  source: string;
  status: string;
  stop_lose_percent: number;
  stop_lose_price: number;
  swap: number;
  user_balance_id: number;
  user_id: number;
};

export type rawEvent = positionCommon & {
  count: number;
  index: number;
  status: string;
  order_ids: number[];
  buy_amount: number;
  sell_amount: number;
  swap_enrolled: number;
  count_realized: number;
};

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

export type GetByIDOptions = {
  position_id: number;
};

export type CloseByIdOptions = {
  position_id: number;
};

export type UpdateOptions = {
  position_id: number;
  stop_lose_kind?: string | "percent";
  stop_lose_value: number;
  take_profit_kind?: string | "percent";
  take_profit_value?: number | null;
  use_trail_stop?: true;
  extra?: {
    stop_lose_kind?: string | "percent";
    take_profit_kind?: string | "percent";
  };
};

export type SubscribeToIdsOptions = {
  ids: string[];
  frequency?: number | "frequent";
};
