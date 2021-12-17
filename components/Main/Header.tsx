import React from "react";
import { Text, View } from "react-native";
import { HeaderProps } from "./types";
import { HeaderStyles } from "./styles";

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <View style={HeaderStyles.headContainer}>
      <Text style={HeaderStyles.headTextStyle}>{props.headText}</Text>
    </View>
  );
};

export default Header;
