import * as Auth from "./services/auth/ws.ts";
import * as Profile from "./services/profile/ws.ts";
import * as Position from "./services/position/ws.ts";
import * as Instrument from "./services/instrument/ws.ts";
import * as Order from "./services/order/ws.ts";
import * as Leverage from "./services/leverage/ws.ts";
import * as Mood from "./services/mood/ws.ts";
import * as Indicator from "./services/indicator/ws.ts";
import * as Candle from "./services/candle/ws.ts";
import * as Balance from "./services/balance/ws.ts";
import * as Core from "./services/core/ws.ts";
import type Ws from "./utils/ws.ts";

export type {
  Auth,
  Balance,
  Candle,
  Core,
  Indicator,
  Instrument,
  Leverage,
  Mood,
  Order,
  Position,
  Profile,
};
/**
 * ApiWs class
 * @param ws - Ws instance
 * @module ApiWs
 */
class ApiWs {
  private ws: Ws;

  constructor(ws: Ws) {
    this.ws = ws;
  }

  /**
   * Auth methods
   * @returns {Object} - Auth methods
   */
  get auth(): {
    authenticate: () => void;
  } {
    if (!this.ws.http.token) throw new Error("Token not found");
    return {
      authenticate: () => Auth.authenticate(this.ws),
    };
  }

  /**
   * Profile methods
   * @returns {Object} - Profile methods
   */
  get profile(): {
    get: () => void;
    subscribe: () => void;
    unsubscribe: () => void;
    availability: (options: Profile.AvailabilityOptions) => void;
    getUserInfo: (options: Profile.GetUserInfoOptions) => void;
    userProfileClient: (options: Profile.UserProfileClientOptions) => void;
  } {
    return {
      get: () => Profile.get(this.ws),
      subscribe: () => Profile.subscribe(this.ws),
      unsubscribe: () => Profile.unsubscribe(this.ws),
      availability: (options: Profile.AvailabilityOptions) =>
        Profile.availability(this.ws, options),
      getUserInfo: (options: Profile.GetUserInfoOptions) =>
        Profile.getUserInfo(this.ws, options),
      userProfileClient: (options: Profile.UserProfileClientOptions) =>
        Profile.userProfileClient(this.ws, options),
    };
  }

  /**
   * Balance methods
   * @returns {Object} - Balance methods
   */
  get balance(): {
    get: (options: Balance.GetOptions) => void;
    subscribe: () => void;
    unsubscribe: () => void;
  } {
    return {
      get: (options: Balance.GetOptions) => Balance.get(this.ws, options),
      subscribe: () => Balance.subscribe(this.ws),
      unsubscribe: () => Balance.unsubscribe(this.ws),
    };
  }

  /**
   * Core methods
   * @returns {Object} - Core methods
   */
  get core(): {
    getCommissions: (options: Core.GetCommissionOptions) => void;
    setOptions: () => void;
    heartbeat: (options: Core.HeartbeatOptions) => void;
  } {
    return {
      getCommissions: (options: Core.GetCommissionOptions) =>
        Core.getCommissions(this.ws, options),
      setOptions: () => Core.setOptions(this.ws),
      heartbeat: (options: Core.HeartbeatOptions) =>
        Core.heartbeat(this.ws, options),
    };
  }

  /**
   * Candle methods
   * @returns {Object} - Candle methods
   */
  get candle(): {
    get: (options: Candle.GetOptions) => void;
    getFirst: (options: Candle.GetFirstOptions) => void;
    subscribe: (options: Candle.SubscribeOptions) => void;
    unsubscribe: (options: Candle.UnsubscribeOptions) => void;
  } {
    return {
      get: (options: Candle.GetOptions) => Candle.get(this.ws, options),
      getFirst: (options: Candle.GetFirstOptions) =>
        Candle.getFirst(this.ws, options),
      subscribe: (options: Candle.SubscribeOptions) =>
        Candle.subscribe(this.ws, options),
      unsubscribe: (options: Candle.UnsubscribeOptions) =>
        Candle.unsubscribe(this.ws, options),
    };
  }

  /**
   * Position methods
   * @returns {Object} - Position methods
   */
  get position(): {
    get: () => void;
    getByType: (options: Position.GetPositionsByType) => void;
    getById: (options: Position.GetByIDOptions) => void;
    close: (options: Position.CloseByIdOptions) => void;
    getHistory: (options: Position.GetHistoryOptions) => void;
    subscribeToIds: (options: Position.SubscribeToIdsOptions) => void;
    subscribe: (options: Position.SubscribeOptions) => void;
    unsubscribe: (options: Position.UnsubscribeOptions) => void;
    subscribeState: () => void;
    update: (options: Position.UpdateOptions) => void;
  } {
    return {
      get: () => Position.get(this.ws),
      getByType: (options: Position.GetPositionsByType) =>
        Position.getByType(this.ws, options),
      getById: (options: Position.GetByIDOptions) =>
        Position.getById(this.ws, options),
      close: (options: Position.CloseByIdOptions) =>
        Position.close(this.ws, options),
      getHistory: (options: Position.GetHistoryOptions) =>
        Position.getHistory(this.ws, options),
      subscribeToIds: (options: Position.SubscribeToIdsOptions) =>
        Position.subscribeToIds(this.ws, options),
      subscribe: (options: Position.SubscribeOptions) =>
        Position.subscribe(this.ws, options),
      unsubscribe: (options: Position.UnsubscribeOptions) =>
        Position.unsubscribe(this.ws, options),
      subscribeState: () => Position.subscribeState(this.ws),
      update: (options: Position.UpdateOptions) =>
        Position.update(this.ws, options),
    };
  }

  /**
   * Instrument methods
   * @returns {Object} - Instrument methods
   */
  get instrument(): {
    get: (options: Instrument.GetOptions) => void;
    subscribe: (options: Instrument.SubscribeOptions) => void;
    unsubscribe: (options: Instrument.SubscribeOptions) => void;
  } {
    return {
      get: (options: Instrument.GetOptions) => Instrument.get(this.ws, options),
      subscribe: (options: Instrument.SubscribeOptions) =>
        Instrument.subscribe(this.ws, options),
      unsubscribe: (options: Instrument.SubscribeOptions) =>
        Instrument.unsubscribe(this.ws, options),
    };
  }

  /**
   * Order methods
   * @returns {Object} - Order methods
   */
  get order(): {
    get: (options: Order.getOptions) => void;
    getAllStopLose: (options: Order.getAllStopLoseOptions) => void;
    cancelStopLose: (options: Order.CancelStopLoseOptions) => void;
    subscribe: (options: Order.SubscribeOptions) => void;
    place: (body: Order.placeOrderParams) => void;
    subscribeChanged: (options: Order.ChangedOptions) => void;
    subscribeState: () => void;
  } {
    return {
      get: (options: Order.getOptions) => Order.get(this.ws, options),
      getAllStopLose: (options: Order.getAllStopLoseOptions) =>
        Order.getAllStopLose(this.ws, options),
      cancelStopLose: (options: Order.CancelStopLoseOptions) =>
        Order.cancelStopLose(this.ws, options),
      subscribe: (options: Order.SubscribeOptions) =>
        Order.subscribe(this.ws, options),
      place: (body: Order.placeOrderParams) => Order.place(this.ws, body),
      subscribeChanged: (options: Order.ChangedOptions) =>
        Order.subscribeChanged(this.ws, options),
      subscribeState: () => Order.subscribeState(this.ws),
    };
  }

  /**
   * Leverage methods
   * @returns {Object} - Leverage methods
   */
  get leverage(): {
    get: (options: Leverage.GetOptions) => void;
    subscribe: (options: Leverage.SubscribeOptions) => void;
    unsubscribe: (options: Leverage.SubscribeOptions) => void;
  } {
    return {
      get: (options: Leverage.GetOptions) => Leverage.get(this.ws, options),
      subscribe: (options: Leverage.SubscribeOptions) =>
        Leverage.subscribe(this.ws, options),
      unsubscribe: (options: Leverage.SubscribeOptions) =>
        Leverage.unsubscribe(this.ws, options),
    };
  }

  /**
   * Mood methods
   * @returns {Object} - Mood methods
   */
  get mood(): {
    get: (options: Mood.GetOptions) => void;
    subscribe: (options: Mood.SubscribeOptions) => void;
    unsubscribe: (options: Mood.UnsubscribeOptions) => void;
  } {
    return {
      get: (options: Mood.GetOptions) => Mood.get(this.ws, options),
      subscribe: (options: Mood.SubscribeOptions) =>
        Mood.subscribe(this.ws, options),
      unsubscribe: (options: Mood.UnsubscribeOptions) =>
        Mood.unsubscribe(this.ws, options),
    };
  }

  /**
   * Indicator methods
   * @returns {Object} - Indicator methods
   */
  get indicator(): {
    get: (options: Indicator.GetOptions) => void;
  } {
    return {
      get: (options: Indicator.GetOptions) => Indicator.get(this.ws, options),
    };
  }

  /**
   * Check if websocket is connected
   * @returns {boolean} - Is connected
   */
  get isConnected(): boolean {
    return this.ws.isConnected;
  }

  /**
   * Connect to websocket
   * @returns {void}
   */
  get connect(): () => void {
    return () => this.ws.connect();
  }

  /**
   * Reconnect to websocket
   * @returns {void}
   */
  get reconnect(): () => void {
    return () => this.ws.reconnect();
  }

  /**
   * Close websocket connection
   * @returns {void}
   */
  get close(): () => void {
    return () => this.ws.close();
  }

  /**
   * Send message to websocket
   * @param {string} callback - Message to send
   */
  set onMessage(callback: (json: Record<string, unknown>) => void) {
    this.ws.onMessage = (json: Record<string, unknown>) => callback(json);
  }

  /**
   * On open event
   * @param {string} callback - On open event
   */
  set onOpen(callback: (event: Event) => void) {
    this.ws.onOpen = (event: Event) => callback(event);
  }

  /**
   * On error event
   * @param {string} callback - On error event
   */
  set onError(callback: (event: Event) => void) {
    this.ws.onError = (event: Event) => callback(event);
  }

  /**
   * On close event
   * @param {string} callback - On close event
   */
  set onClose(callback: (event: CloseEvent) => void) {
    this.ws.onClose = (event: CloseEvent) => callback(event);
  }

  get sendedMessages(): string[] {
    return this.ws.messages.sended;
  }

  set sendedMessages(value: string[]) {
    this.ws.messages.sended = value;
  }

  get messages(): string[] {
    return this.ws.messages.received;
  }

  set messages(value: string[]) {
    this.ws.receiveMessage = value;
  }

  get sendedSubscribe(): string[] {
    return this.ws.subscribe.sended;
  }

  set sendedSubscribe(value: string[]) {
    this.ws.subscribe.sended = value;
  }

  get messageId(): number {
    return this.ws.messages.id;
  }

  get subscribeId(): number {
    return this.ws.subscribe.id;
  }

  get lastMessageId(): number {
    return this.ws.messages.lastId;
  }

  set lastMessageId(value: number) {
    this.ws.messages.lastId = value;
  }

  removeReceivedMessage(message: string): void {
    this.ws.removeReceivedMessage(message);
  }
}

export default ApiWs;
