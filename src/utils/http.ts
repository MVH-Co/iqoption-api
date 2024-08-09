import type { dataResponse, jsonResponse } from "./http.type.ts";
export type * from "./http.type.ts";

/**
 * Http class
 * @module Http
 */
class Http {
  declare headers: Headers;
  declare response: Response;
  declare json?: jsonResponse;
  declare data?: dataResponse<unknown>;
  declare token?: string;

  constructor() {
    this.headers = new Headers({
      "content-type": "application/json",
      accept: "*/*",
    });
    this.response = new Response();
  }

  /**
   * @param uri string
   * @param arg { path?: string; query?: URLSearchParams; options: RequestInit; }
   * @returns {Promise<dataResponse<T>>} - Response
   * @template T - Response data type
   * @async @method fetch - Fetch data from iqoption api
   * @module Http
   */
  async fetch<T = unknown>(
    uri: string,
    arg?: {
      path?: string;
      query?: Record<string, string>;
      options?: RequestInit;
    },
  ): Promise<dataResponse<T>> {
    try {
      const url = new URL(
        `https://${arg?.path ? arg.path + "." : ""}iqoption.com/api${uri}`,
      );
      if (arg?.query) url.search = new URLSearchParams(arg.query).toString();

      !arg && (arg = {});
      !arg.options && (arg.options = {});

      arg.options.headers = {
        ...arg?.options?.headers,
        ...this.headersToObject(this.headers),
      };

      // console.log(options);
      this.response = await fetch(url, {
        ...arg?.options,
        cache: "no-cache",
      });

      if (!this.response.ok) {
        this.json = await this.checkJson();
        if (this.json) return this.handleJsonError(this.json);
        return this.handleError(this.response.statusText, this.response.status);
      }

      // add cookies to headers if exist
      this.checkSetCookie();

      if (this.response.status === 204) {
        return this.handleSuccess();
      }

      this.json = await this.checkJson();
      if (this.json) return this.handleJson(this.json);
      console.log(this.json);
      return this.handleSuccess();
    } catch (error) {
      if (error instanceof Error) {
        return this.handleError(error.message);
      }
    }
    return this.handleError("An unknown error occurred");
  }

  /**
   * @param message string
   * @param code number
   * @param data T
   * @returns {dataResponse<T>} - Response
   * @template T - Response data type
   * @method handleError - Handle error response
   * @module Http
   */
  private handleError<T = unknown>(
    message: string,
    code = 500,
    data?: T,
  ): dataResponse<T> {
    return {
      success: false,
      ...(data && Object.keys(data).length !== 0 && { data: data as T }),
      error: { code, message },
    };
  }

  /**
   * @param data Record<string, unknown>
   * @returns {dataResponse<T>} - Response
   * @template T - Response data type
   * @method handleSuccess - Handle success response
   * @module Http
   */
  private handleSuccess<T = unknown>(
    data?: Record<string, unknown>,
  ): dataResponse<T> {
    return {
      success: true,
      ...(data && Object.keys(data).length !== 0 && { data: data as T }),
    };
  }

  /**
   * @returns {Promise<void | jsonResponse>} - Response
   * @async @method checkJson - Check if response is json
   * @module Http
   * @private
   */
  private async checkJson(): Promise<undefined | jsonResponse> {
    try {
      const contentType = this.response.headers.get("Content-Type")?.split(";");
      if (contentType?.includes("application/json")) {
        this.json = await this.response.json();
        return this.json;
      }
    } catch (error) {
      if (error instanceof Error) {
        return Promise.reject<undefined>(this.handleError(error.message));
      }
    }
  }

  /**
   * @returns {void} - Response
   * @method checkSetCookie - Check if response has set-cookie header
   * @module Http
   * @private
   */
  private checkSetCookie(): void {
    const setCookie = this.response.headers.getSetCookie();
    if (setCookie) this.addCookie(setCookie);
  }

  /**
   * @param setCookie string[]
   * @returns {void} - Response
   * @method addCookie - Add cookie to headers
   * @module Http
   * @private
   */
  private addCookie(setCookie: string[]): void {
    setCookie.forEach((cookie) => {
      this.headers.append("cookie", cookie);
    });
  }
  /**
   * @returns {string} - Cookie
   * @method getCookie - Get cookie from headers
   * @module Http
   * @private
   */
  getCookie(): string {
    return this.headers.get("cookie") || "";
  }

  /**
   * @param cookie string
   * @returns {void} - Response
   * @method setCookie - Set cookie to headers
   * @module Http
   * @private
   */
  setCookie(token: string, expiresAt: number): void {
    const now = Math.floor(Date.now() / 1000);
    if (expiresAt < now) {
      this.headers.delete("cookie");
      return;
    }
    const max = 2592000;
    const maxAge = expiresAt - now > max ? max : expiresAt - now;
    const cookie =
      `ssid=${token}; Max-Age=${maxAge}; Domain=iqoption.com; Path=/; Secure`;
    this.headers.set("cookie", cookie);
  }

  /**
   * @param headers Headers
   * @returns {Record<string, string>} - Headers
   * @method headersToObject - Convert headers to object
   * @module Http
   * @private
   */
  private headersToObject(headers: Headers): Record<string, string> {
    const obj: Record<string, string> = {};
    headers.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }

  /**
   * @param json jsonResponse
   * @returns {dataResponse<T>} - Response
   * @template T - Response data type
   * @method handleJson - Handle json response
   * @module Http
   * @private
   */
  private handleJson<T = undefined>(
    json: jsonResponse,
  ): dataResponse<T> {
    const code = json.code;
    const success = !code || code === "success" || json.isSuccessful === true;
    if (json.data) {
      json = { ...json, ...json.data };
    }
    if (Array.isArray(json.message) && !json.message.length) {
      delete json.message;
    }
    if (json.result && !Array.isArray(json.result)) {
      json = { ...json, ...json.result };
      delete json.result;
    }
    delete json.code;
    delete json.isSuccessful;
    delete json.success;
    delete json.data;
    if (!success) return this.handleError<T>(code || "");
    if (this.response.url.includes("/login")) {
      this.token = json.ssid as string;
    }

    return this.handleSuccess<T>(json);
  }

  /**
   * @param json jsonResponse
   * @returns {dataResponse<T>} - Response
   * @template T - Response data type
   * @method handleJsonError - Handle json error response
   * @module Http
   * @private
   */
  private handleJsonError<T = undefined>(json: jsonResponse): dataResponse<T> {
    delete json.isSuccessful;
    ["message", "result"].forEach((key) => {
      if (Array.isArray(json[key]) && !json[key].length) {
        delete json[key];
      }
    });
    return this.handleError(
      this.response.statusText,
      this.response.status,
      json as T,
    );
  }
}

export default Http;
