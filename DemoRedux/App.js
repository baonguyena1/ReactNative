import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from "redux";
import { Provider } from "react-redux";

import Header from './Header';
import Controler from './Controler';

const initialState = { value: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UP':
        return { value: state.value + 1};
    case 'DOWN':
        return { value: state.value - 1 };
    default:
        return state;
  }
}

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={ styleApp.container }>
          <Header />
          <Controler />
        </View>
      </Provider>
    );
  }
}

const styleApp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  }
});