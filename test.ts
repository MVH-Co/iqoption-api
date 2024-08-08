import IqOption, { type dataResponse } from "./mod.ts";
import type * as auth from "./src/services/auth/type.ts";

const _iq: dataResponse<auth.login> = await IqOption.http.auth
  .login({
    identifier: "email",
    password: "password",
  });
