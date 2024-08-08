import type Http from "./utils/http.ts";
import type { dataResponse } from "./utils/http.ts";
import * as Auth from "./services/auth/http.ts";
import * as Profile from "./services/profile/http.ts";
import * as Avatar from "./services/avatar/http.ts";
import * as FinInfo from "./services/fininfo/http.ts";
import * as Balance from "./services/balance/http.ts";
import * as Core from "./services/core/http.ts";
import * as Event from "./services/event/http.ts";
import * as Features from "./services/features/http.ts";
import type { login, logout, session } from "./services/auth/type.ts";

export type { Auth, Avatar, Balance, Core, Event, Features, FinInfo, Profile };

/**
 * ApiHttp class
 * @param http - Http instance
 * @module ApiHttp
 */
class ApiHttp {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Auth methods
   * @returns {Object} - Auth methods
   */
  get auth(): {
    login: (payload: Auth.LoginPayload) => Promise<dataResponse<login>>;
    logout: () => Promise<dataResponse<logout>>;
    session: () => Promise<dataResponse<session>>;
  } {
    return {
      login: (payload: Auth.LoginPayload) => Auth.login(this.http, payload),
      logout: () => Auth.logout(this.http),
      session: () => Auth.session(this.http),
    };
  }

  /**
   * Profile methods
   * @returns {Object} - Profile methods
   */
  get profile(): {
    get: () => Promise<dataResponse<Profile.profile>>;
  } {
    return {
      get: () => Profile.get(this.http),
    };
  }
  /**
   * Avatar methods
   * @returns {Object} - Avatar methods
   */
  get avatar(): {
    get: (payload?: Avatar.GetPayload) => Promise<dataResponse<Avatar.avatar>>;
  } {
    return {
      get: (payload?: Avatar.GetPayload) => Avatar.get(this.http, payload),
    };
  }
  /**
   * FinInfo methods
   * @returns {Object} - FinInfo methods
   */
  get FinInfo(): {
    graphql: (
      payload: FinInfo.GraphqlPayload,
    ) => Promise<dataResponse<unknown>>;
    postOptions: (
      payload: FinInfo.PostPayload,
    ) => Promise<dataResponse<unknown>>;
  } {
    return {
      graphql: (payload: FinInfo.GraphqlPayload) =>
        FinInfo.graphql(this.http, payload),
      postOptions: (payload: FinInfo.PostPayload) =>
        FinInfo.postOptions(this.http, payload),
    };
  }
  /**
   * Balance methods
   * @returns {Object} - Balance methods
   */
  get balance(): {
    post: (payload: Balance.PostPayload) => Promise<dataResponse<unknown>>;
  } {
    return {
      post: (payload: Balance.PostPayload) => Balance.post(this.http, payload),
    };
  }
  /**
   * Core methods
   * @returns {Object} - Core methods
   */
  get core(): {
    getConfiguration: () => Promise<dataResponse<unknown>>;
    getCurrencies: () => Promise<dataResponse<Core.currencies>>;
    getTimezones2: () => Promise<dataResponse<unknown>>;
    getRegData: () => Promise<dataResponse<Profile.profile>>;
    getCountries: () => Promise<dataResponse<Core.countries>>;
    getContactInfo: () => Promise<dataResponse<Core.contactInfo>>;
    getManager: () => Promise<dataResponse<Core.contactInfo>>;
  } {
    return {
      getConfiguration: () => Core.getConfiguration(this.http),
      getCurrencies: () => Core.getCurrencies(this.http),
      getTimezones2: () => Core.getTimezones2(this.http),
      getRegData: () => Core.getRegData(this.http),
      getCountries: () => Core.getCountries(this.http),
      getContactInfo: () => Core.getContactInfo(this.http),
      getManager: () => Core.getManager(this.http),
    };
  }
  /**
   * Event methods
   * @returns {Object} - Event methods
   */
  get event(): {
    get: () => Promise<dataResponse<unknown>>;
  } {
    return {
      get: () => Event.get(this.http),
    };
  }
  /**
   * Features methods
   * @returns {Object} - Features methods
   */
  get features(): {
    get: () => Promise<dataResponse<unknown>>;
  } {
    return {
      get: () => Features.get(this.http),
    };
  }
}

export default ApiHttp;
