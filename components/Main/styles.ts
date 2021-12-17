import { StyleSheet } from "react-native";

/* RecallCardStyles */

export const RecallCardStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  mainImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  mainTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 15,
    width: "100%",
  },
  mainClothText: {
    fontSize: 24,
    fontWeight: "900",
    marginVertical: 10,
    position: "absolute",
    top: "10%",
  },
  mainClothKinds: {
    fontSize: 12,
    fontWeight: "800",
    borderWidth: 1.5,
    position: "absolute",
    padding: 8,
    paddingVertical: 3,
    top: "55%",
    borderRadius: 10,
    borderColor: "#EE1337",
    color: "#EE1337",
  },
  requestContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
    flexDirection: "row",
    marginHorizontal: 15,
  },
  eachImage: {
    width: 80,
    height: 80,
    marginHorizontal: 5,
  },
  lineContainer: {
    paddingHorizontal: 15,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#c0c0c0",
    marginVertical: 15,
  },
});

/* HeaderStyles */

export const HeaderStyles = StyleSheet.create({
  headContainer: {
    width: "100%",
    marginTop: 70,
    marginBottom: 25,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  headTextStyle: {
    fontSize: 20,
    fontWeight: "900",
  },
});
