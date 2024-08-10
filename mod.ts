import Http from "./src/utils/http.ts";
import Ws from "./src/utils/ws.ts";
import ApiHttp from "./src/api.http.ts";
import ApiWs from "./src/api.ws.ts";

/**
 * IqOption class
 * This module is the main module of the library to interact with the iqoption api
 * @module IqOption
 */
class IqOption {
  declare private _http: Http;
  declare private _ws: Ws;
  declare http: ApiHttp;
  declare ws: ApiWs;

  /**
   * Constructor of IqOption class
   */
  constructor() {
    this._http = new Http();
    this.http = new ApiHttp(this._http);
    this._ws = new Ws(this._http);
    this.ws = new ApiWs(this._ws);
  }
}

const iqOption: IqOption = new IqOption();

export default iqOption;

export type { dataResponse } from "./src/utils/http.type.ts";
export type { dataWsResponse, sended } from "./src/utils/ws.type.ts";
