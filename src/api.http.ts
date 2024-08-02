import Http from "./utils/http.ts";
import * as Auth from "./services/auth.http.ts";
import * as Profile from "./services/profile.http.ts";
import * as Avatar from "./services/avatar.http.ts";
import * as FinInfo from "./services/fininfo.http.ts";
import * as Balance from "./services/balance.http.ts";
import * as Core from "./services/core.http.ts";
import * as Event from "./services/event.http.ts";
import * as Features from "./services/features.http.ts";

class ApiHttp {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  get auth() {
    return {
      login: (payload: Auth.LoginPayload) => Auth.login(this.http, payload),
      logout: () => Auth.logout(this.http),
      session: () => Auth.session(this.http),
    };
  }
  get profile() {
    return {
      get: () => Profile.get(this.http),
    };
  }
  get avatar() {
    return {
      get: (current = false) => Avatar.get(this.http, current),
    };
  }
  get FinInfo() {
    return {
      graphql: (payload: FinInfo.GraphqlPayload) =>
        FinInfo.graphql(this.http, payload),
      postOptions: (query: string) => FinInfo.postOptions(this.http, query),
    };
  }
  get balance() {
    return {
      post: (balanceId: number) => Balance.post(this.http, balanceId),
    };
  }
  get core() {
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
  get event() {
    return {
      get: () => Event.get(this.http),
    };
  }
  get features() {
    return {
      get: () => Features.get(this.http),
    };
  }
}

export default ApiHttp;
