import type { instrumentType } from "../instrument/type.ts";
import type { extraData } from "../position/type.ts";

export type placeOrderParams = {
  user_balance_id: number;
  instrument_type: instrumentType; // 'crypto' | 'forex' | 'cfd' | 'digital-option';
  instrument_id: string;
  side: "buy" | "sell";
  amount: string;
  leverage: number;
  limit_price: number; // only working by set type="limit"
  stop_price: number; // only working by set type="stop"
  stop_lose_value: number;
  stop_lose_kind: "percent" | string;
  take_profit_value: number;
  take_profit_kind: "percent" | string;
};

export type order = {
  instrument_id_escape: string;
  basic_stoplimit_amount: number;
  take_profit_price: null | number;
  stop_lose_price: null | number;
  tpsl_extra: null | unknown;
  instrument_strike_value: null | unknown;
  instrument_type: instrumentType;
  instrument_id: string;
  instrument_underlying: string;
  instrument_active_id: number;
  instrument_expiration: null | unknown;
  instrument_strike: null | unknown;
  instrument_dir: null | unknown;
  instrument_period: null | unknown;
  instrument_percent: null | unknown;
  id: number;
  user_id: number;
  user_balance_id: number;
  user_group_id: number;
  user_balance_type: number;
  position_id: number;
  create_at: number;
  update_at: number;
  execute_at: number;
  side: string;
  type: string;
  status: string;
  execute_status: string;
  count: number;
  leverage: number;
  underlying_price: number;
  avg_price: number;
  avg_price_enrolled: number;
  client_platform_id: number;
  limit_price: number;
  stop_price: number;
  currency: string;
  margin: number;
  spread: null | unknown;
  commission_amount: number;
  commission_amount_enrolled: number;
  extra_data: extraData;
  time_in_force: string;
  time_in_force_date: null | unknown;
  last_index: number;
};

export type getAllStopLoseOptions = {
  user_balance_id: number;
  instrument_type: string;
};

export type getOptions = {
  user_balance_id: number;
  kind?: null | "deferred";
};

export type ChangedOptions = {
  user_id: number;
  instrument_type: string;
};

export type SubscribeOptions = {
  frequency: string;
  ids: string[];
};

export type CancelStopLoseOptions = {
  order_id: number;
};
