import Ws from "../utils/ws.ts";

// TODO: Implement the get function
export function get(ws: Ws, id: number): void {
  ws.send({
    name: "trading-signals.get-technical-indicators",
    version: "1.0",
    body: { id },
  });
}
