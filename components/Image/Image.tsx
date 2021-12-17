import React from "react";
import { View, Image } from "react-native";
import { ImageStyles } from "./styles";
import { ImageProps } from "./types";

const ImageSection: React.FC<ImageProps> = (props) => {
  const imageURL = props.route.params.imageURL;

  return (
    <View style={ImageStyles.imageContainer}>
      <Image
        style={{ width: "100%", height: "50%" }}
        source={{ uri: imageURL }}
      ></Image>
    </View>
  );
};

export default ImageSection;
