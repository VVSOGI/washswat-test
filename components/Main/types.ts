/* MainProps */

export interface MainProps {
  currentRequest: { mission: { itemList: object[] }; information: object };
  fetchData: () => {};
  navigation: object;
  route: object;
}

/* RecallCardProps */

export interface RecallCardProps {
  data: {
    name: string;
    representativeItemImage: string;
    userMessage: string;
    imageList: [{ imageId: string; imageURL: string }];
    tagList: string[];
  };
  navigation: any;
  information: {
    [key: string]: string | object;
    time: { pickup: string; delivery: string };
  } & any;
}

/* HeaderProps */

export interface HeaderProps {
  headText: string;
}
