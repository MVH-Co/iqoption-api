export type dataResponse<T = undefined> = {
  success: boolean;
  data?: T;
  error?: {
    code: number;
    message: string;
  };
};

export type jsonResponse = {
  code?: string;
  [key: string]: unknown;
};
