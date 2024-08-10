export type dataWsResponse<T = Record<string, unknown>> = {
  name: string;
  msg: T;
  request_id?: string;
  status: number;
};

export type sended<T = Record<string, unknown>> = {
  name: string;
  request_id: string;
  message: T;
  success: "pending" | boolean;
};

// export type message<T = Record<string, unknown>, K = Record<string, unknown>> =
//   {
//     name: string;
//     version?: string;
//     msg?: T;
//     body?: T;
//     params?: T;
//   };

// // --- WS TYPES ---
// export type iqMessage<T = Record<never, never>> = {
//   name: string;
//   request_id?: string;
//   msg: T;
//   status?: number;
// };

// // --- WS TYPES MSG ---

// export type subscribe = {
//   name: string;
//   version: string;
//   params: Record<never, never>;
// };
