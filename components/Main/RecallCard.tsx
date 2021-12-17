import React, { useState } from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RecallCardProps } from "./types";
import { RecallCardStyles } from "./styles";

const RecallCard: React.FC<RecallCardProps> = (props) => {
  const [isHide, setIsHide] = useState<Boolean>(false);

  const handleImageHide = () => {
    setIsHide(!isHide);
  };

  return (
    <View>
      <TouchableOpacity
        style={RecallCardStyles.mainContainer}
        onPress={() => {
          const navigation = props.navigation;
          navigation.navigate("상세정보", {
            information: props.information,
          });
        }}
      >
        <Image
          source={{ uri: props.data.representativeItemImage }}
          style={RecallCardStyles.mainImage}
        />
        <View style={RecallCardStyles.mainTextContainer}>
          <Text style={RecallCardStyles.mainClothText}>{props.data.name}</Text>
          <Text style={RecallCardStyles.mainClothKinds}>
            {props.data.tagList[0]}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleImageHide()}>
        <View style={RecallCardStyles.requestContainer}>
          <Text style={{ fontWeight: "600" }}>{props.data.userMessage}</Text>
          <AntDesign name={isHide ? "down" : "up"} size={20} />
        </View>
      </TouchableOpacity>
      <ScrollView style={RecallCardStyles.imageContainer} horizontal={true}>
        {isHide
          ? null
          : props.data.imageList.map(
              (item: { imageId: string; imageURL: string }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      const navigation = props.navigation;
                      navigation.navigate("첨부사진", {
                        imageURL: item.imageURL,
                      });
                    }}
                    key={item.imageId}
                  >
                    <Image
                      source={{ uri: item.imageURL }}
                      style={RecallCardStyles.eachImage}
                    />
                  </TouchableOpacity>
                );
              }
            )}
      </ScrollView>
      <View style={RecallCardStyles.lineContainer}>
        <View style={RecallCardStyles.line}></View>
      </View>
    </View>
  );
};

export default RecallCard;
