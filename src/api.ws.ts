import * as Auth from "./services/auth.ws.ts";
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

import Ws from "./utils/ws.ts";

class ApiWs {
  private ws: Ws;

  constructor(ws: Ws) {
    this.ws = ws;
  }

  get auth() {
    if (!this.ws.http.token) throw new Error("Token not found");
    return {
      authenticate: () => Auth.authenticate(this.ws),
    };
  }

  get profile() {
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

  get balance() {
    return {
      get: (typesIds: number[]) => Balance.get(this.ws, typesIds),
      subscribe: () => Balance.subscribe(this.ws),
      unsubscribe: () => Balance.unsubscribe(this.ws),
    };
  }

  get core() {
    return {
      getCommissions: () => Core.getCommissions(this.ws),
      setOptions: () => Core.setOptions(this.ws),
      heartbeat: (beat: number, localTime: number) =>
        Core.heartbeat(this.ws, beat, localTime),
    };
  }

  get candle() {
    return {
      get: (options: Candle.GetOptions) => Candle.get(this.ws, options),
      subscribe: (options: Candle.SubscribeOptions) =>
        Candle.subscribe(this.ws, options),
      unsubscribe: (options: Candle.UnsubscribeOptions) =>
        Candle.unsubscribe(this.ws, options),
    };
  }

  get position() {
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

  get instrument() {
    return {
      get: (instrument_type: Instrument.instrumentType) =>
        Instrument.get(this.ws, instrument_type),
      subscribe: (instrument_type: Instrument.instrumentType) =>
        Instrument.subscribe(this.ws, instrument_type),
      unsubscribe: (instrument_type: Instrument.instrumentType) =>
        Instrument.unsubscribe(this.ws, instrument_type),
    };
  }

  get order() {
    return {
      get: (options: Order.getOptions) => Order.get(this.ws, options),
      getAllStopLose: (options: Order.getAllStopLoseOptions) =>
        Order.getAllStopLose(this.ws, options),
      cancelStopLose: (orderId: number) =>
        Order.cancelStopLose(this.ws, orderId),
      subscribe: (options: Order.SubscribeOptions) =>
        Order.subscribe(this.ws, options),
      place: (body: Order.placeOrderParams) => Order.place(this.ws, body),
      changed: (options: Order.ChangedOptions) =>
        Order.changed(this.ws, options),
      subscribeState: () => Order.subscribeState(this.ws),
    };
  }

  get leverage() {
    return {
      get: (instrumentType: Instrument.instrumentType) =>
        Leverage.get(this.ws, instrumentType),
      subscribe: (instrumentType: Instrument.instrumentType) =>
        Leverage.subscribe(this.ws, instrumentType),
      unsubscribe: (instrumentType: Instrument.instrumentType) =>
        Leverage.unsubscribe(this.ws, instrumentType),
    };
  }

  get mood() {
    return {
      get: (options: Mood.GetOptions) => Mood.get(this.ws, options),
      subscribe: (options: Mood.SubscribeOptions) =>
        Mood.subscribe(this.ws, options),
      unsubscribe: (options: Mood.UnsubscribeOptions) =>
        Mood.unsubscribe(this.ws, options),
    };
  }

  get indicator() {
    return {
      get: (id: number) => Indicator.get(this.ws, id),
    };
  }

  get isConnected() {
    return this.ws.isConnected;
  }

  get connect() {
    return () => this.ws.connect();
  }

  get reconnect() {
    return () => this.ws.reconnect();
  }

  get close() {
    return () => this.ws.close();
  }

  set onMessage(callback: (event: MessageEvent) => void) {
    this.ws.onMessage = (event: MessageEvent) => callback(event);
  }

  set onOpen(callback: (event: Event) => void) {
    this.ws.onOpen = (event: Event) => callback(event);
  }

  set onError(callback: (event: Event) => void) {
    this.ws.onError = (event: Event) => callback(event);
  }

  set onClose(callback: (event: CloseEvent) => void) {
    this.ws.onClose = (event: CloseEvent) => callback(event);
  }
}

export default ApiWs;
