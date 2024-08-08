export type iqFrontWsMessage = {
  name: "front";
  msg: string;
  "session_id": string;
};

export type iqResultWsMsg = { success: boolean; reason?: string };
export type iqTimeSyncMsg = number;
export type iqHeartbeatMsg = number;

export type iqSubstriptionWsMessage = {
  name: "subscription";
  msg: {
    "subscription_id": number;
    "expires_at": number;
    "expires_in": number;
  };
  "request_id": string;
};
