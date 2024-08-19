import type Ws from "../../utils/ws.ts";
import type { ResetBalanceOptions } from "./type.ts";

export function resetBalance(
  ws: Ws,
  options: ResetBalanceOptions,
): void {
  ws.send({
    name: "sendMessage",
    msg: {
      name: "internal-billing.reset-training-balance",
      version: "3.0",
      body: {
        ...options,
        amount: 10000,
      },
    },
    request_id: `${ws.messages.id}`,
  });
}
