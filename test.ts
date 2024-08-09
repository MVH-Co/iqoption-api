import IqOption from "./mod.ts";

await IqOption.http.auth
  .login({
    identifier: "user",
    password: "passwd",
  });

console.log("Done!");
await IqOption.http.auth.logout();
