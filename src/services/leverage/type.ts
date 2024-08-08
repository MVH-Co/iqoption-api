import type { instrumentType } from "../instrument/type.ts";

export type leverage = {
  active_id: number;
  unregulated: [number];
  unregulated_default: number;
  regulated: [number];
  regulated_default: number;
};

export type leverages = {
  instrument_type: instrumentType;
  group_id: number;
  leverages: leverage[];
};

export type GetOptions = {
  instrument_type: instrumentType;
};

export type SubscribeOptions = {
  instrument_type: instrumentType;
  user_group_id?: number;
};