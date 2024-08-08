import * as Auth from "./services/auth/ws.ts";
import * as Profile from "./services/profile.ws.ts";
import * as Position from "./services/position.ws.ts";
import * as Instrument from "./services/instrument.ws.ts";
import * as Order from "./services/order.ws.ts";
import * as Leverage from "./services/leverage.ws.ts";
import * as Mood from "./services/mood.ws.ts";
import * as Indicator from "./services/indicator.ws.ts";
import * as Candle from "./services/candle.ws.ts";
import * as Balance from "./services/balance.ws.ts";
import * as Core from "./services/core.ws.ts";
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
    availability: (userId: number) => void;
    getUserInfo: (country: [number], userId: number) => void;
    userProfileClient: (userId: number) => void;
  } {
    return {
      get: () => Profile.get(this.ws),
      subscribe: () => Profile.subscribe(this.ws),
      unsubscribe: () => Profile.unsubscribe(this.ws),
      availability: (userId: number) => Profile.availability(this.ws, userId),
      getUserInfo: (country: [number], userId: number) =>
        Profile.getUserInfo(this.ws, country, userId),
      userProfileClient: (userId: number) =>
        Profile.userProfileClient(this.ws, userId),
    };
  }

  /**
   * Balance methods
   * @returns {Object} - Balance methods
   */
  get balance(): {
    get: (typesIds: number[]) => void;
    subscribe: () => void;
    unsubscribe: () => void;
  } {
    return {
      get: (typesIds: number[]) => Balance.get(this.ws, typesIds),
      subscribe: () => Balance.subscribe(this.ws),
      unsubscribe: () => Balance.unsubscribe(this.ws),
    };
  }

  /**
   * Core methods
   * @returns {Object} - Core methods
   */
  get core(): {
    getCommissions: () => void;
    setOptions: () => void;
    heartbeat: (beat: number, localTime: number) => void;
  } {
    return {
      getCommissions: () => Core.getCommissions(this.ws),
      setOptions: () => Core.setOptions(this.ws),
      heartbeat: (beat: number, localTime: number) =>
        Core.heartbeat(this.ws, beat, localTime),
    };
  }

  /**
   * Candle methods
   * @returns {Object} - Candle methods
   */
  get candle(): {
    get: (options: Candle.GetOptions) => void;
    getFirst: (activeId: number) => void;
    subscribe: (options: Candle.SubscribeOptions) => void;
    unsubscribe: (options: Candle.UnsubscribeOptions) => void;
  } {
    return {
      get: (options: Candle.GetOptions) => Candle.get(this.ws, options),
      getFirst: (activeId: number) => Candle.getFirst(this.ws, activeId),
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
    getById: (positionId: number) => void;
    close: (positionId: number) => void;
    getHistory: (options: Position.GetHistoryOptions) => void;
    subscribeToIds: (ids: string[]) => void;
    subscribe: (options: Position.SubscribeOptions) => void;
    unsubscribe: (options: Position.UnsubscribeOptions) => void;
    subscribeState: () => void;
    update: (positionId: number, stop: number) => void;
  } {
    return {
      get: () => Position.get(this.ws),
      getByType: (options: Position.GetPositionsByType) =>
        Position.getByType(this.ws, options),
      getById: (positionId: number) => Position.getById(this.ws, positionId),
      close: (positionId: number) => Position.close(this.ws, positionId),
      getHistory: (options: Position.GetHistoryOptions) =>
        Position.getHistory(this.ws, options),
      subscribeToIds: (ids: string[]) => Position.subscribeToIds(this.ws, ids),
      subscribe: (options: Position.SubscribeOptions) =>
        Position.subscribe(this.ws, options),
      unsubscribe: (options: Position.UnsubscribeOptions) =>
        Position.unsubscribe(this.ws, options),
      subscribeState: () => Position.subscribeState(this.ws),
      update: (positionId: number, stop: number) =>
        Position.update(this.ws, positionId, stop),
    };
  }

  /**
   * Instrument methods
   * @returns {Object} - Instrument methods
   */
  get instrument(): {
    get: (instrument_type: Instrument.instrumentType) => void;
    subscribe: (instrument_type: Instrument.instrumentType) => void;
    unsubscribe: (instrument_type: Instrument.instrumentType) => void;
  } {
    return {
      get: (instrument_type: Instrument.instrumentType) =>
        Instrument.get(this.ws, instrument_type),
      subscribe: (instrument_type: Instrument.instrumentType) =>
        Instrument.subscribe(this.ws, instrument_type),
      unsubscribe: (instrument_type: Instrument.instrumentType) =>
        Instrument.unsubscribe(this.ws, instrument_type),
    };
  }

  /**
   * Order methods
   * @returns {Object} - Order methods
   */
  get order(): {
    get: (options: Order.getOptions) => void;
    getAllStopLose: (options: Order.getAllStopLoseOptions) => void;
    cancelStopLose: (orderId: number) => void;
    subscribe: (options: Order.SubscribeOptions) => void;
    place: (body: Order.placeOrderParams) => void;
    subscribeChanged: (options: Order.ChangedOptions) => void;
    subscribeState: () => void;
  } {
    return {
      get: (options: Order.getOptions) => Order.get(this.ws, options),
      getAllStopLose: (options: Order.getAllStopLoseOptions) =>
        Order.getAllStopLose(this.ws, options),
      cancelStopLose: (orderId: number) =>
        Order.cancelStopLose(this.ws, orderId),
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
    get: (instrumentType: Instrument.instrumentType) => void;
    subscribe: (instrumentType: Instrument.instrumentType) => void;
    unsubscribe: (instrumentType: Instrument.instrumentType) => void;
  } {
    return {
      get: (instrumentType: Instrument.instrumentType) =>
        Leverage.get(this.ws, instrumentType),
      subscribe: (instrumentType: Instrument.instrumentType) =>
        Leverage.subscribe(this.ws, instrumentType),
      unsubscribe: (instrumentType: Instrument.instrumentType) =>
        Leverage.unsubscribe(this.ws, instrumentType),
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
    get: (id: number) => void;
  } {
    return {
      get: (id: number) => Indicator.get(this.ws, id),
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
  set onMessage(callback: (event: MessageEvent) => void) {
    this.ws.onMessage = (event: MessageEvent) => callback(event);
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
}

export default ApiWs;
