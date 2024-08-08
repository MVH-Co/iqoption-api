export type mood = {
  instrument: string;
  asset_id: number;
  value: number;
};

export type SubscribeOptions = {
  instrument: string;
  asset_id: number;
};

export type GetOptions = SubscribeOptions;

export type UnsubscribeOptions = SubscribeOptions;
