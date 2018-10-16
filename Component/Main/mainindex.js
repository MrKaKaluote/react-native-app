import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  DeviceEventEmitter,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Navigator } from 'react-native-deprecated-custom-components'
import Home from "../Home/homeindex";
import Goods from "../Goods/goodsindex";
import Store from "../Store/storeindex";
import Mine from "../Mine/mineindex";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "mine"
    };
  };
  CustomNavg(title, selectname, noselectimg, selectimg, componentname, component, changeval) {
    return (
      <TabNavigator.Item
        title={title}
        onPress={() => { this.setState({ selectedTab: selectname }); DeviceEventEmitter.emit('userNameDidChange', changeval) }}
        selected={this.state.selectedTab === selectname}
        renderIcon={() => <Image source={noselectimg} style={styles.iconStyle} />}
        selectedTitleStyle={styles.selectedTitleStyle}
        renderSelectedIcon={() => <Image source={selectimg} style={styles.iconStyle} />}
      >
        <Navigator
          style={{flex:1}}
          initialRoute={{ name: componentname, component: component }}
          configureScene={() => {// 过渡动画
            return Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.passProps} navigator={navigator} />;
          }}
        />
      </TabNavigator.Item>
    )
  };
  render() {
    var arr = [
      [require('../../assets/img/index-noselect.png'), require('../../assets/img/index-select.png')],
      [require('../../assets/img/goods-noselect.png'), require('../../assets/img/goods-select.png')],
      [require('../../assets/img/cart-noselect.png'), require('../../assets/img/cart-select.png')],
      [require('../../assets/img/jiuzhou-noselect.png'), require('../../assets/img/jiuzhou-select.png')],
    ];
    return (
      <TabNavigator>
        {this.CustomNavg('首页', 'home', arr[0][0], arr[0][1], '首页', Home, '1')}
        {this.CustomNavg('商品', 'goods', arr[1][0], arr[1][1], '商品', Goods, '2')}
        {this.CustomNavg('购物车', 'store', arr[2][0], arr[2][1], '购物车', Store, '3')}
        {this.CustomNavg('个人中心', 'mine', arr[3][0], arr[3][1], '首页', Mine, '4')}
      </TabNavigator>
    );
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