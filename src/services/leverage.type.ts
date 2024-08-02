import { instrumentType } from "./instrument.type.ts";

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
