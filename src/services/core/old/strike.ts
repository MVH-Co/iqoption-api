// """
// exp = self.get_digital_expiration_time(duration)
// data = {
//   "name": "get-strike-list",
//   "body": {
//     "type": "digital-option",
//     "underlying": name,
//     "expiration": int(exp) * 1000,
//     "period": duration * 60
//   },
//   "version": "4.0"
// }
// self.send_websocket_request(self.name, data)

//     def get_digital_expiration_time(self, duration):
// exp = int(self.api.timesync.server_timestamp)
// value = datetime.datetime.fromtimestamp(exp)
// minute = int(value.strftime('%M'))
// second = int(value.strftime('%S'))
// ans = exp - exp % 60#delete second
// ans = ans + (duration - minute % duration) * 60
// if exp > ans - 10:
//   ans = ans + (duration) * 60

// return ans

/**
 * @param provider
 * @param name
 * @param duration minutes
 * @returns void
 */
export function getList(
  name: string,
  duration: number,
  timestamp: number,
): Record<string, unknown> {
  return {
    name: "get-strike-list",
    version: "4.0",
    body: {
      type: "cfd",
      underlying: name,
      expiration: timestamp * 1000,
      period: duration * 60,
    },
  };
}
