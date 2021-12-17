import { StyleSheet } from "react-native";

export const InformationStyles = StyleSheet.create({
  informationContainer: {
    paddingTop: 50,
    padding: 20,
    backgroundColor: "#fff",
    height: "100%",
  },
  mainTitle: { fontSize: 48, fontWeight: "900", maxWidth: "75%" },
  subTitle: { fontSize: 32, fontWeight: "800", marginVertical: 30 },
  mainContainer: {
    marginVertical: 20,
    marginTop: 0,
  },
  itemContainer: {
    marginVertical: 30,
    marginBottom: 30,
  },

  middleText: { fontWeight: "800", fontSize: 24 },
  smallText: { fontSize: 16, maxWidth: "60%" },

  line: { width: "100%", height: 1, backgroundColor: "#c0c0c0" },
});
