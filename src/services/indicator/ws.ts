import type Ws from "../../utils/ws.ts";
import type { GetOptions } from "./type.ts";
export type * from "./type.ts";

// TODO: Implement the get function
export function get(ws: Ws, options: GetOptions): void {
  ws.send({
    name: "trading-signals.get-technical-indicators",
    version: "1.0",
    body: options,
  });
}
