import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
}
  from 'react-native';
import StyleSheet from 'StyleSheet';


export default class Headernav extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.backbtn()}
        <View style={styles.textview}>
          <Text style={styles.textstyle}>{this.props.title || "标题头"}</Text>
        </View>
        <View style={styles.user}>
        </View>
      </View>
    );
  };
  backbtn() {
    const noticeType = this.props.showback;
    if (noticeType) {
      return (
        <View style={styles.back}>
            <TouchableOpacity onPress={this.props.goback}>
            <Image source={require('../../assets/img/back.png')} style={styles.backicon}></Image>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
          <View style={styles.back}>
              {/* <Image source={require('../../assets/img/back.png')} style={styles.backicon}></Image> */}
          </View>
      )
    }
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: global.iOS ? px2dp(40): px2dp(0),
    paddingBottom: global.iOS ? px2dp(10): px2dp(0),
    flexDirection: 'row',
    alignItems: 'center',
    height: px2dp(90),
    alignSelf: 'stretch',
    backgroundColor: '#F4CF21',
  },
  back: {
    flex: 1,
    alignSelf: 'center',
  },
  backicon: {
    height: px2dp(40),
    width: px2dp(40),
    marginLeft: px2dp(20)
  },
  user: {
    flex: 1,
    alignSelf: 'center',
  },
  textview: {
    flex: 2,
    alignSelf: 'center',
  },
  textstyle: {
    fontSize: FONT_SIZE(16),
    color: '#fff',
    textAlign: 'center',
  },
});
