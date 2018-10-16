/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from './Component/Redux/store';
import "./Component/Global/index"
import Main from "./Component/Main/navigatorcot"
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <View style={styles.mainbox}> */}
          <Main />
        {/* </View> */}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  mainbox: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: '#FFFFFF'
  }
});
