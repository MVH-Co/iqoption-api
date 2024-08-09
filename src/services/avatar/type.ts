export type avatar = {
  id: string;
  status: string;
  validateStatus: string;
  url: string;
  crop: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  thumbnails: [
    {
      url: string;
      size: {
        width: number;
        height: number;
      };
    },
  ];
};

export type AvatarResponse = {
  result: avatar[];
};

export type GetPayload = {
  current: boolean;
};
