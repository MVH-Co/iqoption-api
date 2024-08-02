// import { provider } from "@/base/type/provider.ts";

// const buyV2 = (provider: provider)
//   provider.{
//     name: "crypto.open-position",
//     version: "1.0",
//     body: {
//       user_balance_id: provider?.profile?.current.balance.active.id,
//       active_id: 816,
//       option_type_id: 16, // is turbo-option, means expiration is less than five mins
//       direction: "call", // or 'put'
//       expired: 1, // range 1-5 if it's turbo-option
//       price: 5, // amount to invest
//       // profit_percent: 85, // this value is calculated internally using broker.trading.profits
//       returnMessage: true,
//     },
//   });

// export default buyV2;

// // forex', 'cfd', 'crypto', 'digital-option', 'turbo-option' or 'binary-option'

// // 'binary-option' is deprecated, use 'turbo-option' instead
