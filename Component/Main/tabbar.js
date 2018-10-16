import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  DeviceEventEmitter,
  BackAndroid,
  ToastAndroid
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Navigator } from 'react-native-deprecated-custom-components'
import Home from "../Home/homeindex";
import Goods from "../Goods/goodsindex";
import Store from "../Store/storeindex";
import Mine from "../Mine/mineindex";
export default class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home"
    };
  };
  componentWillMount(){
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    } 
  };
  componentWillUnmount(){
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  };
  onBackAndroid = () => {
    const navigator = this.props.navigator;
    const routers = navigator.getCurrentRoutes();
    if (routers.length > 1) {
      navigator.pop();
      return true;//接管默认行为
    } else {
      //到了主页了
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //最近2秒内按过back键，可以退出应用。
        return false;
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show("再按一次退出应用", ToastAndroid.SHORT);
      return true;
    }
  };
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          title='主页'
          onPress={() => { this.setState({ selectedTab: 'home' }); DeviceEventEmitter.emit('userNameDidChange', '1') }}
          selected={this.state.selectedTab === 'home'}
          renderIcon={() => <Image source={require('../../assets/img/index-noselect.png')} style={styles.iconStyle} />}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderSelectedIcon={() => <Image source={require('../../assets/img/index-select.png')} style={styles.iconStyle} />}
        >
          <Home navigator={this.props.navigator} />
        </TabNavigator.Item>
        <TabNavigator.Item
          title='商品'
          onPress={() => { this.setState({ selectedTab: 'goods' }); DeviceEventEmitter.emit('userNameDidChange', '2') }}
          selected={this.state.selectedTab === 'goods'}
          renderIcon={() => <Image source={require('../../assets/img/goods-noselect.png')} style={styles.iconStyle} />}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderSelectedIcon={() => <Image source={require('../../assets/img/goods-select.png')} style={styles.iconStyle} />}
        >
          <Goods navigator={this.props.navigator} />
        </TabNavigator.Item>
        <TabNavigator.Item
          title='购物车'
          onPress={() => { this.setState({ selectedTab: 'store' }); DeviceEventEmitter.emit('userNameDidChange', '3') }}
          selected={this.state.selectedTab === 'store'}
          renderIcon={() => <Image source={require('../../assets/img/cart-noselect.png')} style={styles.iconStyle} />}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderSelectedIcon={() => <Image source={require('../../assets/img/cart-select.png')} style={styles.iconStyle} />}
        >
          <Store navigator={this.props.navigator} />
        </TabNavigator.Item>
        <TabNavigator.Item
          title='个人中心'
          onPress={() => { this.setState({ selectedTab: 'mine' }); DeviceEventEmitter.emit('userNameDidChange', '4') }}
          selected={this.state.selectedTab === 'mine'}
          renderIcon={() => <Image source={require('../../assets/img/jiuzhou-noselect.png')} style={styles.iconStyle} />}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderSelectedIcon={() => <Image source={require('../../assets/img/jiuzhou-select.png')} style={styles.iconStyle} />}
        >
          <Mine navigator={this.props.navigator} />
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: px2dp(40),
    height: px2dp(40)
  },

  selectedTitleStyle: {
    color: 'orange'
  }
});