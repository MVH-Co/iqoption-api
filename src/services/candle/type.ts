export type candle = {
  id: number;
  from: number;
  to: number;
  open: number;
  close: number;
  min: number;
  max: number;
  volume: number;
};

export type candleSizes =
  | "1"
  | "5"
  | "10"
  | "15"
  | "30"
  | "60"
  | "120"
  | "300"
  | "600"
  | "900"
  | "1800"
  | "3600"
  | "7200"
  | "14400"
  | "28800"
  | "43200"
  | "86400"
  | "604800"
  | "2592000";

export type candleGenerated = candle & {
  active_id: number;
  size: number;
  at: number;
  ask: number;
  bid: number;
  phase: string;
};

type candlesBySize = { [key in candleSizes]: candle };
export type firstCandle = { candles_by_size: candlesBySize };
export type candles = { candles: candle[] };

// export type iqGetCandlesBody = {
//   "active_id": number;
//   "from_id": number;
//   "to_id": number;
//   "size": number;
//   "split_normalization": boolean;
//   "only_closed": boolean;
// };

// export type firstCandlesBody = {
//   "active_id": number;
//   "split_normalization": boolean;
// };

export type GetOptions = {
  active_id: number;
  from_id: number;
  to_id: number;
  size: number;
};

export type SubscribeOptions = {
  active_id?: number;
  size: number | "all";
};

export type UnsubscribeOptions = SubscribeOptions;

export type GetFirstOptions = {
  active_id: number;
  split_normalization?: boolean;
};
