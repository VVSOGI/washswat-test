/* InformationProps */

export interface InformationProps {
  navigation: object;
  route: {
    params: {
      information: {
        [key: string]: string | object;
        time: { pickup: string; delivery: string };
      };
    };
  };
}
