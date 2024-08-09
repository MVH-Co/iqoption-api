export type category =
  | "android-vertical"
  | "platform-4"
  | "web-wallet"
  | "ios-app"
  | "test"
  | "ios-trading"
  | "android-app"
  | "common"
  | "billing"
  | "web-4-app"
  | "android-wallet"
  | "ios-wallet"
  | "android-x"
  | "uk-web-desktop"
  | "backend"
  | "chat"
  | "billing-deposit-preset"
  | "android-china-demo"
  | "web-tablet"
  | "web-mobile"
  | "features-by-tags"
  | "retention-rfm"
  | "customer-journey-map"
  | "crm"
  | "uv"
  | "pwa"
  | "flutter-app";

/**
 * @enum {string} status - status enum for features, can be equal to "123456789" too
 */
export type status =
  | "enabled"
  | "disabled"
  | "old-web-style"
  | "welcome1"
  | "presets_new"
  | "forex"
  | "digital-option"
  | "hueraga"
  | "enabled_show_3ds"
  | "welcome2"
  | "showall"
  | "trim-short"
  | "images"
  | "min_1"
  | "enabled-new-card-layout"
  | "light-portrait"
  | "enabled-privacy"
  | "google"
  | "enabled-without-mkt"
  | "opengl"
  | "3|5|7|9|10|12|13|14|15|17|19"
  | "enabled_off"
  | "824|816|837|821|864|829|818|820|819|846|825|845|827|858|847|828|817|826"
  | "metal"
  | "new_europe_20"
  | "paging"
  | "enabled-with-popup"
  | "new_binary"
  | "trim-long"
  | "enabled-limit-300"
  | "store"
  | "no-warning"
  | "default"
  | "optimal"
  | "practice"
  | "dialogflow-cx"
  | "reg-regular-trading"
  | "email"
  | "main"
  | "fx-promotio";

/**
 * @type {Object} features - features object
 * @property {category} category - category of the feature
 * @property {number} id - id of the feature
 * @property {string} name - name of the feature
 * @property {Record<string,unknown>} params - params of the feature
 * @property {number} version - version of the feature
 * @property {status} status - status of the feature
 */
export type feature = {
  category: category;
  id: number;
  name: string;
  params: null;
  version: number;
  status: status;
};

export type GetFeatures = {
  identity: string;
  features: feature[];
};

export type GetFeaturesQuery = {
  category: category;
};
