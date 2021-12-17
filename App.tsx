import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainSection from "./components/Main/Main";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import ImageSection from "./components/Image/Image";
import InformationSection from "./components/Information/Information";

const Stack = createStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainSection}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="첨부사진" component={ImageSection} />
          <Stack.Screen name="상세정보" component={InformationSection} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
