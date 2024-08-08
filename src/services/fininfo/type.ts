export type GraphqlPayload = {
  operationName: string;
  variables: Record<never, never>;
  query: string;
};

export type PostPayload = {
  operationName: string;
  variables: Record<never, never>;
  query: string;
};

export type GetOptions = {
  active: number;
};
