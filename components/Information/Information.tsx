import React from "react";
import { Text, View } from "react-native";
import { InformationStyles } from "./styles";
import { InformationProps } from "./types";

const InformationSection: React.FC<InformationProps> = (props) => {
  const info = props.route.params.information;

  return (
    <View style={InformationStyles.informationContainer}>
      <Text style={InformationStyles.mainTitle}>문제 접수를 확인해주세요</Text>
      <Text style={InformationStyles.subTitle}>수거/배송 정보</Text>
      <View style={InformationStyles.mainContainer}>
        <Text style={InformationStyles.middleText}>일정</Text>
        <View style={InformationStyles.itemContainer}>
          <Text style={InformationStyles.smallText}>
            수거 : {info.time.pickup}
          </Text>
          <Text style={InformationStyles.smallText}>
            배송 : {info.time.delivery}
          </Text>
        </View>
        <View style={InformationStyles.line}></View>
      </View>
      <View style={InformationStyles.mainContainer}>
        <Text style={InformationStyles.middleText}>주소</Text>
        <View style={InformationStyles.itemContainer}>
          <Text style={InformationStyles.smallText}>
            {info.address_01} {info.address_02}
          </Text>
        </View>
        <View style={InformationStyles.line}></View>
      </View>
      <View style={InformationStyles.mainContainer}>
        <Text style={InformationStyles.middleText}>수거/배송 위치</Text>
        <View style={InformationStyles.itemContainer}>
          <Text style={InformationStyles.smallText}>{info.location}</Text>
        </View>
        <View style={InformationStyles.line}></View>
      </View>
    </View>
  );
};

export default InformationSection;
