import type { instrumentType } from "../instrument/type.ts";
import type { profile } from "../profile/type.ts";

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

export type currencies = { currencies: currency[] };

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

export type countries = {
  constries: country[];
};

export type contactInfo = {
  canBeRated: boolean;
  canOrderCallback: boolean;
  canOrderVipSupportCallback: boolean;
  canOrderCallbackError: string | null;
  certificates: boolean;
  hasVipManager: boolean;
  isOnline: number; // 0 or 1 as boolean
  managerBirthCountry: boolean;
  managerBirthday: string;
  managerDescription: string;
  managerGender: number; // 0 or 1 as boolean
  managerId: number;
  managerLanguages: string[];
  managerName: string;
  managerPhone: false | string;
  managerPhoto: string;
  managerPhotosList: boolean;
  trainingSessionsCategories: { id: number; title: string; logo: string }[];
  trainingSessions: {
    id: number;
    categoryId: number;
    title: string;
    description: string;
    logo: string;
    duration: number;
  }[];
  educationMaterials: boolean;
  managerWorkStartDate: string;
  managerWorkTime: { [key: string]: string[] };
  managerWorkTimeUTC: { [key: string]: string[] };
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
  user_group_id: number;
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

export type GetCommissionOptions = {
  instrument_type: instrumentType;
  user_group_id: number;
};

export type manager = {
  canBeRated: boolean;
  canOrderCallback: true;
  canOrderVipSupportCallback: boolean;
  canOrderCallbackError: null;
  certificates: boolean;
  hasVipManager: true;
  isOnline: number;
  managerBirthCountry: boolean;
  managerBirthday: string;
  managerDescription: string;
  managerGender: number;
  managerId: number;
  managerLanguages: [
    string,
  ];
  managerName: string;
  managerPhone: boolean;
  managerPhoto: string;
  managerPhotosList: boolean;
  trainingSessionsCategories: [
    {
      id: number;
      title: string;
      logo: string;
    },
  ];
  trainingSessions: [
    {
      id: number;
      categoryId: number;
      title: string;
      description: string;
      logo: string;
      duration: number;
    },
  ];
  educationMaterials: boolean;
  managerWorkStartDate: string;
  managerWorkTime: { [key: string]: string[] };
  managerWorkTimeUTC: { [key: string]: string[] };
};

export type timezones = { [key: string]: string };

export type timezone = {
  current: string;
  timezones: timezones;
};

export type regData = {
  country: { id: number; name: string }[];
  phone_codes: { [key: string]: number };
  currencies: { id: number; name: string }[];
  currencies_enabled: number; // 0 or 1 as boolean
  profile: profile;
  timezone: timezones;
  address: string;
  postal_index: string;
  city: string;
  nationality: string;
  questions: [];
  rate_in_one_click: boolean;
  deposit_in_one_click: boolean;
  social_key: string;
};

export type lpApiCookies = {
  aff: string;
  aff_history: string;
  aff_model: string;
  aff_ts: string;
  affextra: string;
  afftrack: string;
  landing: string;
  retrack: string;
};

export type appInit = {
  lang: {
    [key: string]: {
      name: string;
      title: string;
      selected: boolean;
      shortname: string;
    };
  };
  socials: Record<string, unknown>;
  currencies: {
    id: number;
    name: string;
    mask: string;
    symbol: string;
    is_default: boolean;
    min_inversment: number;
  }[];
  language_stamp: string;
  deposit_amount: number;
  deposit_count: number;
  deposit_stat: number;
  push_settings: unknown[];
  country: number;
  user_id: number;
  is_regulated: true;
  is_activated: true;
  flag: string;
  feed_top_traders_post_ussr_countries: number[];
  brand: {
    icon: string;
    image: string;
    name: string;
  };
  company: {
    aml: string;
    domain: string;
    email: string;
    general_fees: string;
    name: string;
    order_execution_policy: string;
    payment_policy: string;
    privacy_policy: string;
    subdomain: string;
    terms: string;
  };
};
