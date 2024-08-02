export type underlying = {
  active_id: number;
  active_group_id: number;
  active_type: activeType;
  image: string;
  image_prefix: string;
  is_enabled: boolean;
  is_suspended: boolean;
  localization_key: string;
  name: string; //'EURUSD';
  precision: number;
  regulation_mode: string; //'all';
  schedule: schedule[];
  start_time: number;
  tags: Record<string | number | symbol, never>;
  underlying: string; //EURUSD;
};

export type instrument = {
  id: string;
  currency_left_side: string;
  currency_right_side: string;
  expirations: [];
  instrument_source: string;
  is_visible: boolean;
  last_ask: null;
  last_bid: null;
  pip_scale: number;
  ticker: string;
} & underlying;

export type instrumentType = "crypto" | "forex" | "cfd" | "digital-option";

export type activeType = "Commodity" | "Stock" | "ETF" | "Forex" | "Crypto";

export type schedule = { open: number; close: number };

export type instruments = {
  user_group_id: number;
  is_regulated: boolean;
  type: instrumentType;
  instruments: instrument[];
};
