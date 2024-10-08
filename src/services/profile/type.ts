import type { balance } from "../balance/type.ts";

enum policy {
  "is_call_accepted",
  "is_push_accepted",
  "is_email_accepted",
  "is_agreement_accepted",
  "is_thirdparty_accepted",
}

export type personal_data_policy = {
  [key in policy]: { status: boolean };
};

export type profile = {
  account_status: string;
  address: string;
  auth_two_factor: boolean;
  avatar: string;
  balance: number;
  balance_id: number;
  balance_type: number;
  balances: balance[];
  birthdate: boolean;
  bonus_total_wager: number;
  bonus_wager: number;
  cashback_level_info: {
    enabled: boolean;
  };
  city: string;
  client_category_id: number;
  company_id: number;
  confirmation_required: number;
  confirmed_phones: string[];
  country_id: number;
  created: number;
  currency: string;
  currency_char: string;
  currency_id: number;
  demo: number;
  deposit_count: number;
  deposit_in_one_click: boolean;
  email: string;
  finance_state: string;
  first_name: string;
  flag: string;
  forget_status: {
    status: string;
    created: null;
    expires: null;
  };
  functions: {
    popup_ids: { [key: string]: string };
    ext_fields: Record<never, never>;
    is_vip_mode: number;
    is_bonus_block: number;
    is_no_currency_change: number;
    is_trading_bonus_block: number;
  };
  gender: "male" | string;
  group_id: number;
  id: number;
  infeed: number;
  is_activated: boolean;
  is_islamic: boolean;
  is_vip_group: boolean;
  kyc: {
    status: number;
    isPhoneFilled: boolean;
    isPhoneNeeded: boolean;
    isProfileFilled: boolean;
    isProfileNeeded: boolean;
    isRegulatedUser: boolean;
    daysLeftToVerify: number;
    isPhoneConfirmed: boolean;
    isDocumentsNeeded: boolean;
    isDocumentsApproved: boolean;
    isDocumentsDeclined: boolean;
    isDocumentsUploaded: boolean;
    isDocumentPoaUploaded: boolean;
    isDocumentPoiUploaded: boolean;
    isDocumentsUploadSkipped: boolean;
    isPhoneConfirmationSkipped: boolean;
  };
  kyc_confirmed: boolean;
  last_name: string;
  last_visit: boolean;
  locale: string;
  mask: string;
  messages: number;
  money: {
    deposit: {
      min: number;
      max: number;
    };
    withdraw: {
      min: number;
      max: number;
    };
  };
  name: string;
  nationality: string;
  need_phone_confirmation: boolean;
  new_email: string;
  nickname: string;
  personal_data_policy: personal_data_policy;
  phone: string;
  popup: [];
  postal_index: string;
  public: number;
  rate_in_one_click: boolean;
  site_id: number;
  skey: string;
  socials: Record<never, never>;
  ssid: boolean;
  tc: boolean;
  timediff: number;
  tin: string;
  tournaments_ids: null;
  trade_restricted: boolean;
  trial: boolean;
  tz: string;
  tz_offset: number;
  user_circle: string;
  user_group: string;
  user_id: number;
  welcome_splash: number;
};

export type AvailabilityOptions = {
  user_ids: number[];
};

export type GetUserInfoOptions = {
  country_ids: number[];
  requested_user_id: number;
};

export type UserProfileClientOptions = {
  user_id: number;
};

export type ProfileMsg = {
  isSuccessful: boolean;
  message: [];
  result: profile;
};
