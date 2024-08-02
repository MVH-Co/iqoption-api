import type Http from "./http.ts";

class Ws {
  private _ws?: WebSocket;
  declare http: Http;
  declare url: string;
  declare onMessage: (event: MessageEvent) => void;
  declare onOpen: (event: Event) => void;
  declare onClose: (event: CloseEvent) => void;
  declare onError: (event: Event) => void;
  sendedMessages: string[] = [];
  messages: string[] = [];
  sendedSubscribe: string[] = [];
  messageId = 0;
  subscribeId = 0;
  isConnected = false;

  constructor(http: Http) {
    this.http = http;
    this.url = "wss://iqoption.com/echo/websocket";
  }

  connect(): void {
    try {
      if (!this.url) {
        throw new Error("WebSocket URL is not defined");
      }
      this._ws = new WebSocket(this.url);

      this._ws.onopen = (ev: Event) => {
        this.isConnected = true;
        console.log("WebSocket connection established");
        if (this.onOpen) this.onOpen(ev);
      };

      this._ws.onclose = (ev: CloseEvent) => {
        this.isConnected = false;
        console.log("WebSocket connection closed");
        if (this.onClose) this.onClose(ev);
      };

      this._ws.onerror = (ev: Event | ErrorEvent) => {
        console.error("WebSocket error:", ev);
        if (this.onError) this.onError(ev);
      };

      this._ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        this.messages.push(JSON.stringify(data));
        if (this._ws && this.onMessage) this.onMessage(data);
        // console.log("WebSocket message received:", data);
      };
    } catch (error) {
      if (error instanceof Error) {
        console.error("WebSocket error:", error.message);
      }
    }
  }

  reconnect(): void {
    if (this.isConnected) this._ws?.close();
    this.isConnected = false;
    this.messages = [];
    this.sendedMessages = [];
    this.sendedSubscribe = [];
    this.messageId = 0;
    this.connect();
  }

  close(): void {
    if (this.isConnected) this._ws?.close();
    this.isConnected = false;
    this.messages = [];
    this.sendedMessages = [];
    this.sendedSubscribe = [];
    this.messageId = 0;
  }

  send(message: Record<string, unknown>): void {
    if (this.isConnected && this._ws) {
      const messagestr = JSON.stringify(message);
      if (message.name === "subscribeMessage") {
        this.sendedSubscribe.push(messagestr);
        this.subscribeId += 1;
      }
      if (message.name === "sendMessage") {
        this.sendedMessages.push(messagestr);
        this.messageId += 1;
      }
      this._ws.send(messagestr);
    }
  }
}

export default Ws;
