import type { instrumentType } from "../instrument/type.ts";

type currency = {
  id: number;
  name: string;
  description: string;
  symbol: string;
  is_visible: boolean;
  mask: string;
  is_tradable: boolean;
  code: string;
  unit: number;
  rate: number;
  rate_usd: number;
  min_deal_amount: number;
  max_deal_amount: number;
  minor_units: number;
  image: string;
  is_crypto: boolean;
  is_inout: boolean;
  interest_rate: number;
};

export type currencies = currency[];

export type country = {
  id: number;
  name: string;
  phone_codes: number[];
  priority: number;
  code_id: number;
  name_full: string;
  name_short: string;
  name_iso: string;
  domain: string;
  currency_id: null;
  currencies: number[];
  is_visible: boolean;
  is_regulated: boolean;
  is_registration_restricted: boolean;
  region: string;
  region_id: number;
  usergroups: {
    vip: number;
    default: number;
  };
  timezone: string;
};

export type countries = country[];

export type contactInfo = {
  canBeRated: boolean;
  canOrderCallback: boolean;
  canOrderVipSupportCallback: boolean;
  canOrderCallbackError: string;
  certificates: boolean;
  hasVipManager: boolean;
  isOnline: boolean;
  managerBirthCountry: boolean;
  managerBirthday: boolean;
  managerDescription: boolean;
  managerGender: boolean;
  managerId: boolean;
  managerLanguages: boolean;
  managerName: boolean;
  managerPhone: boolean;
  managerPhoto: boolean;
  managerPhotosList: boolean;
  trainingSessionsCategories: boolean;
  trainingSessions: boolean;
  educationMaterials: boolean;
  managerWorkStartDate: boolean;
  managerWorkTime: boolean;
  managerWorkTimeUTC: boolean;
};

export type configuration = {
  auth_api: string;
  avatars_api: string;
  billing_api: string;
  blog_endpoint: string;
  chat_api: string;
  crashes_endpoint: string;
  event_api: string;
  features_api: string;
  financial_information_api: string;
  fsms_endpoint: string;
  gateway_api: string;
  gl_notification_api: string;
  gl_update_api: string;
  privacy_endpoint: string;
  resources_endpoint: string;
  tc: boolean;
  terms_endpoint: string;
  trading_cluster_api: {
    host: string;
    port: string;
    protocol: string;
  };
  trading_cluster_websocket: {
    host: string;
    port: string;
    protocol: string;
  };
  user_verification_api: string;
  user_verify_api: string;
  video_education_endpoint: string;
  wallet_referral: string;
  web_endpoint: string;
  web_endpoint_regulated: string;
  web_static_endpoint: string;
};

export type SubscribeCommissionOptions = {
  instrument_type: instrumentType;
  user_group_id?: number;
};

export type GetOvernightFeeOptions = {
  instrument_type: instrumentType;
  user_group_id: number;
  active_id: number;
};

export type HeartbeatOptions = {
  heartbeat: number;
  localTime: number;
};
