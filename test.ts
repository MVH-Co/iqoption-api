import IqOption from "./mod.ts";

const iq = await IqOption.http.auth
  .login({
    identifier: "email",
    password: "password",
  });
