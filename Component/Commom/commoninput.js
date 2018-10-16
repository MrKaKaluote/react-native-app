import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
}
from 'react-native';
import StyleSheet from 'StyleSheet';

export default class Commoninput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  };
  onchangeval(text) {
    const { onchangeval } = this.props;
    if (onchangeval) {
      onchangeval(text);
    }
  };
  render() {
    return (
      <View>
        <View style={styles.view}>
          <Text style={styles.title}>{this.props.title || "标题名："}</Text>
          <TextInput
            defaultValue={this.props.defaultvalue}
            secureTextEntry={this.props.password || false}
            style={styles.edit}
            underlineColorAndroid='transparent'
            placeholder={this.props.placeholder} 
            onChangeText={(text) => this.onchangeval(text)}/>
        </View>
        {this.showline()}
      </View>
    );
  };
  showline() {
    const showline = this.props.showline;
    if (showline) {
      return (
        <View style={styles.line1px}>
        </View>
      )
    } else {
      return
    }
  }
}


const styles = StyleSheet.create({
  edit: {
    height: px2dp(88),
    fontSize: FONT_SIZE(14),
    backgroundColor: '#fff',
    width: px2dp(500),
    marginLeft: px2dp(10),  //左右留出一定的空间
    paddingTop: global.iOS ? px2dp(11) : px2dp(30),
    // marginTop: px2dp(10),
    marginRight: px2dp(10)
  },
  title: {
    fontWeight: '100',
    paddingTop: px2dp(6),
    fontSize: FONT_SIZE(14),
    color: fontcolor
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: px2dp(10),
    backgroundColor: '#fff',
    height: px2dp(90),    //通过大于TextInput的高度来弥补上面的问题
    justifyContent: 'flex-end'  //放置到底部
  },
  line1px: {
    width: SCREEN_WIDTH,
    height: 1,
    backgroundColor: '#E7E7E7'
  }
});
