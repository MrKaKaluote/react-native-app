import React, { Component } from 'react';
import {
  Text,
  View,
  AsyncStorage,
  DeviceEventEmitter
}
  from 'react-native';
import StyleSheet from 'StyleSheet';
import Headernav from "../Commom/headernav";

export default class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "商品"
    };
  };
  componentDidMount() {
    DeviceEventEmitter.addListener('userNameDidChange', (param) => {
      //点击底部导航按钮后首页执行的操作，比如发送数据请求或刷新页面  
      if (param === '2') {
        // alert(param)
      }
    });
  };
  componentWillUnmount() {
    DeviceEventEmitter.remove();
  };
  render() {
    return (
      <View style={styles.mainbox}>
        <Headernav title={this.state.title} />
        <View>
          <Text>商品</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mainbox: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: bgcolor
  },
});
