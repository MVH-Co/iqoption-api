export type login = {
  company_id: number;
  created_at: number;
  ssid: string;
  user_id: number;
};

export type logout = {
  ssid: string;
};

export type session = {
  id: string;
  expires_at: number;
  expires_cache_at: number;
  user_id: number;
  brand_id: number;
  company_id: number;
  country_id: number;
  modified: number;
  platform: number;
  ip: string;
  user_agent: string;
};

export type LoginPayload = {
  identifier: string;
  password: string;
};

export type Check2FAPayload = {
  code: string;
  token: string;
};

export type Set2FAMethodPayload = {
  method: "push" | "email" | "sms";
  enabled: boolean;
  token: string;
};

export type Authenticate = {
  name: "authenticated";
  msg: boolean;
  client_session_id: string;
  request_id: string;
};

export type Ask2FAPayload = {
  method: "sms" | "push" | "email";
  token: string;
};
