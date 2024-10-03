import IqOption from "./mod.ts";

await IqOption.http.auth.login({
  identifier: "id",
  password: "pass",
});

IqOption.ws.onMessage = (json) => console.log(json);
IqOption.ws.onOpen = () => IqOption.ws.auth.authenticate();
// IqOption.ws.onMessage = (json) => {
//   if (json.name === "heartbeat" || json.name === "timeSync") {
//     return;
//   }
//   if (json.name === "authenticated") {
//     IqOption.ws.core.setOptions();
//     IqOption.ws.position.subscribe({
//       userId: 1,
//       userBalanceId: 1,
//       instrumentType: "crypto",
//     });
//   }
// };

IqOption.ws.connect();

console.log("Done!");
