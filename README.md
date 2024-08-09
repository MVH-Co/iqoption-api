# IQ Option Api Wrapper

This is a Typescript wrapper for the IQ Option API. It allows you to connect to
the IQ Option API.

## Documentation

Http connection is needed to get the websocket token. The websocket token is
needed to connect to the websocket.

When the websocket is connected, you can listen to messages and send messages.

I recommend to use the `IqOption.ws.onMessage` and `IqOption.ws.onOpen` to
define actions when messages are received and when the websocket is opened.

A good practice is to create an handler to run the actions by received message
name.

An other can be to create a propers and adapters class to adapte the messages.

## Features

- [x] Http connection
  - [x] Avatar
    - [x] get avatar current or all
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
    - [x] get registreted data ⚙️ (maybe even than `get user profile`)
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
