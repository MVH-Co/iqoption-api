// deno-lint-ignore-file camelcase

// --- HTTP TYPES ---

// --- WS TYPES ---
export type iqMessage<T = Record<never, never>> = {
  name: string;
  request_id?: string;
  msg: T;
  status?: number;
};

// --- WS TYPES MSG ---

export type message<T = Record<never, never>> = {
  name: string;
  version?: string;
  body: T;
};

export type subscribe = {
  name: string;
  version: string;
  params: Record<never, never>;
};

export type msg<T = message> = {
  name: string;
  msg: T;
};

export type httpRequest = { uri: string; options: RequestInit };
export type httpResponse<T> = {
  isSuccessful: boolean;
  message?: string[] | [];
  result: T;
};
