export type balance = {
  id: number;
  user_id: number;
  type: balanceEnum;
  amount: number;
  enrolled_amount: number;
  enrolled_sum_amount: number;
  hold_amount: number;
  orders_amount: number;
  currency: string;
  tournament_id: null;
  tournament_name: null;
  is_fiat: boolean;
  is_marginal: boolean;
  has_deposits: boolean;
  auth_amount: number;
  equivalent: number;
};

export type balances = balance[];

export type balanceChanged = {
  current_balance: {
    amount: number;
    bonus_amount: number;
    bonus_total_amount: number;
    currency: string;
    enrolled_amount: number;
    id: number;
    index: number;
    is_fiat: boolean;
    is_marginal: boolean;
    new_amount: number;
    type: number;
  };
  id: number;
  user_id: number;
};

export enum balanceEnum {
  REAL = 1,
  DEMO = 4,
}

export type PostPayload = {
  balance_id: number;
};

export type GetOptions = {
  types_ids: number[];
};
