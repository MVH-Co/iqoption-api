import type Http from "./http.ts";
import type { dataWsResponse } from "./ws.type.ts";
export type * from "./ws.type.ts";

const SUBSCRIBE = ["subscribeMessage", "unsubscribeMessage"];
const MESSAGE = ["sendMessage", "authenticate", "heartbeat", "setOptions"];

/**
 * Ws class
 * @param http - Http instance
 * @module Ws
 */
class Ws {
  private _ws?: WebSocket;
  private event?: Event | MessageEvent | CloseEvent | ErrorEvent;
  declare http: Http;
  declare url: string;
  declare onMessage: (json: dataWsResponse) => void;
  declare onOpen: (event: Event) => void;
  declare onClose: (event: CloseEvent) => void;
  declare onError: (event: Event) => void;
  declare messages: {
    id: number;
    sended: string[];
    received: string[];
    lastId: number;
  };
  declare subscribe: { id: number; sended: string[]; lastId: number };
  isConnected = false;

  constructor(http: Http) {
    this.http = http;
    this.url = "wss://iqoption.com/echo/websocket";
    this.reset();
  }

  get tokenAvailable(): boolean {
    return this.http.token !== "" && this.http.token !== undefined;
  }

  /**
   * Connect to websocket
   * @returns {void}
   * @method connect
   * @module Ws
   */
  connect(): void {
    try {
      if (!this.url) {
        throw new Error("WebSocket URL is not defined");
      }
      this._ws = new WebSocket(this.url);

      this._ws.onopen = (ev: Event) => {
        this.isConnected = true;
        this.event = ev;
        console.log("WebSocket connection established");
        if (this.onOpen) this.onOpen(ev);
      };

      this._ws.onclose = (ev: CloseEvent) => {
        this.isConnected = false;
        this.event = ev;
        console.log("WebSocket connection closed");
        if (this.onClose) this.onClose(ev);
      };

      this._ws.onerror = (ev: Event | ErrorEvent) => {
        console.error("WebSocket error:", ev);
        this.event = ev;
        if (this.onError) this.onError(ev);
      };

      this._ws.onmessage = (ev) => {
        this.event = ev;
        const data = JSON.parse(ev.data);
        if (data.name !== "heartbeat" || data.name !== "timeSync") {
          this.addReceivedMessage(JSON.stringify(data));
        }
        if (this._ws && this.onMessage) this.onMessage(data);
      };
    } catch (error) {
      if (error instanceof Error) {
        console.error("WebSocket error:", error.message);
      }
    }
  }

  /**
   * Reconnect to websocket
   * @returns {void}
   * @method reconnect
   * @module Ws
   */
  reconnect(): void {
    if (this.isConnected) this._ws?.close();
    this.isConnected = false;
    this.reset();
    this.connect();
  }

  /**
   * Close websocket connection
   * @returns {void}
   * @method close
   * @module Ws
   */
  close(): void {
    if (this.isConnected) this._ws?.close();
    this.isConnected = false;
    this.reset();
  }

  /**
   * Send message to websocket
   * @param {Record<string, unknown>} message - Message to send
   * @method send
   * @module Ws
   */
  send(message: Record<string, unknown>): void {
    if (this.isConnected && this._ws) {
      const messagestr = JSON.stringify(message);
      if (SUBSCRIBE.includes(message.name as string)) {
        this.subscribe.sended.push(JSON.stringify({
          ...message,
          success: "pending",
        }));
        this.subscribe.id += 1;
      }
      if (MESSAGE.includes(message.name as string)) {
        this.messages.sended.push(JSON.stringify({
          ...message,
          success: "pending",
        }));
        this.messages.id += 1;
      }
      this._ws.send(messagestr);
    }
  }

  addReceivedMessage(message: string): void {
    this.messages.received.push(message);
  }

  set receiveMessage(messages: string[]) {
    this.messages.received = messages;
  }

  delReceivedMessage(index: number): void {
    this.messages.received.splice(index, 1);
  }

  removeReceivedMessage(message: string): void {
    this.messages.received = this.messages.received.filter(
      (msg) => msg !== message,
    );
  }

  dropMessage(): void {
    this.messages.received = [];
  }

  removeMessageByID(id: number): void {
    this.messages.received = this.messages.received.filter((msg) => {
      const data = JSON.parse(msg);
      return data.id !== id;
    });
  }

  reset(): void {
    this.messages = { id: 0, sended: [], received: [], lastId: 0 };
    this.subscribe = { id: 0, sended: [], lastId: 0 };
  }
}

export default Ws;
