# IQ Option Api Wrapper

This is a TypeScript wrapper for the IQ Option API. It allows you to connect to
the IQ Option API.

## Documentation

An HTTP connection is required to obtain the WebSocket token. The WebSocket
token is needed to connect to the WebSocket.

Once the WebSocket is connected, you can listen to and send messages.

I recommend using `IqOption.ws.onMessage` and `IqOption.ws.onOpen` to define
actions when messages are received or when the WebSocket is opened.

A good practice is to create a handler to execute actions based on the received
message names.

Another approach could be to create proper classes and adapters to process the
messages.

## Features

- [x] Http connection
  - [x] Avatar
    - [x] Get current or all avatars
  - [x] Auth
    - [x] Login
    - [x] Logout
    - [x] check session
    - [x] 2FA ⚙️
  - [x] Profile
    - [x] get user profile
  - [ ] financial info
    - [ ] graphql ⚙️
    - [ ] `POST` options ⚙️
  - [x] features
    - [x] get features ⚙️
  - [x] Event
    - [x] get events ⚙️
  - [x] Core
    - [x] get currencies ⚙️
    - [x] get timezone2 ⚙️
    - [x] get registreted data ⚙️ (possibly under `Get user profile`)
    - [x] get countries ⚙️
    - [x] get contact info ⚙️
    - [x] get configuration ⚙️
    - [x] get manager ⚙️
  - [ ] Billing
    - [ ] `POST` buyback ⚙️
    - [ ] `POST` get card ⚙️
    - [ ] `POST` get payment methods ⚙️
    - [ ] `POST` get payout methods ⚙️
  - [ ] Balance
    - [ ] `POST` change balance ⚙️
- [x] Websocket connection
  - [x] Auth
    - [x] Authenticate
  - [x] Balance
    - [x] get balance
    - [x] subscribe balance
    - [x] unsubscribe balance
  - [x] Profile
    - [x] get profile
    - [x] subscribe profile
    - [x] unsubscribe profile
    - [x] get user info
    - [x] get user profile client
  - [x] Position
    - [x] get position
    - [x] update position
    - [x] close position
    - [x] get positions
    - [x] get positions by type
    - [x] get history positions
    - [x] subscribe positions
    - [x] subscribe position changed
    - [x] unsubscribe position
  - [x] Order
    - [x] get order
    - [x] get orders
    - [x] subscribe order
    - [x] unsubscribe order
  - [x] Candle
    - [x] get candles
    - [x] subscribe candles
    - [x] unsubscribe candles
  - [x] Instrument
    - [x] get instruments
    - [x] subscribe instruments
    - [x] unsubscribe instruments
  - [ ] Others...

## Usage

```typescript
import IqOption from "@mvh/iqoption";

console.log(
  await IqOption.http.auth
    .login({
      identifier: "user",
      password: "passwd",
    }),
);

console.log(await IqOption.http.profile.get());
console.log("Done!");

await IqOption.http.auth.logout();
```

WebSocket:

```typescript
import IqOption from "./mod.ts";

// needed for token
await IqOption.http.auth
  .login({
    identifier: "user",
    password: "passwd",
  }),

IqOption.ws.onMessage = (json) => console.log(json);
IqOption.ws.onOpen = () => IqOption.ws.auth.authenticate();

IqOption.ws.connect();

console.log("Done!");
```

### Warning

Don’t forget to use `IqOption.ws.removeReceivedMessage(msg)` after consuming it.
You will encounter a memory leak if you don’t. That’s why I recommend using a
handler to execute actions based on received messages, and that’s why `timeSync`
and `heartbeat` are ignored when received.
