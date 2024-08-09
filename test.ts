import IqOption from "./mod.ts";

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

// const query = { category: "platform-4" };
// const params = new URLSearchParams(query);

// console.log(params.toString());
