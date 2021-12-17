import React, { useEffect } from "react";
import { Text, View, ScrollView } from "react-native";

import { fetchData } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "./Header";
import RecallCard from "./RecallCard";
import { MainProps } from "./types";

const mapDispatchProps = (dispatch: any) => {
  return bindActionCreators({ fetchData }, dispatch);
};

const mapStateToProps = (store: any) => ({
  currentRequest: store.requestState.currentRequest,
});

const MainSection: React.FC<MainProps> = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  if (props.currentRequest === undefined) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <Header headText="재수거 예정 세탁물" />
      {props.currentRequest.mission.itemList.map((item: any, index: number) => {
        return (
          <RecallCard
            key={index}
            data={item}
            navigation={props.navigation}
            information={props.currentRequest?.information}
          />
        );
      })}
    </ScrollView>
  );
};

export default connect(mapStateToProps, mapDispatchProps)(MainSection);
