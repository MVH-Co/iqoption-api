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

export type authenticate = {
  name: "authenticated";
  msg: boolean;
  client_session_id: string;
  request_id: string;
};
