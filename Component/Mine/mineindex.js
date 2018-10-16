import React, { Component } from 'react';
import {
  Text,
  View,
  AsyncStorage,
  DeviceEventEmitter,
  TouchableOpacity
}
  from 'react-native';
// import { Toast } from 'teaset';
import * as commonApi from '../Api/commonapi';
import StyleSheet from 'StyleSheet';
import Headernav from "../Commom/headernav";
import Commoninput from "../Commom/commoninput";
import Commonbtn from "../Commom/commonbtn";
import { connect } from 'react-redux';
import { increase, decrease, reset } from '../Redux/actions';

class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "个人中心",
      user: '',
      password: ''
    };
  };
  componentDidMount() {
    storage.load({
      key: 'loginState'
    }).then(ret => {
      this.setState({
        user: ret.userName,
        password: ret.passWord
      })
    }).catch(err => {
    })
    DeviceEventEmitter.addListener('userNameDidChange', (param) => {
      //点击底部导航按钮后首页执行的操作，比如发送数据请求或刷新页面  
      if (param === '4') {
        // alert(123)
        storage.load({
          key: 'loginState'
        }).then(ret => {
          this.setState({
            user: ret.userName,
            password: ret.passWord
          })
        }).catch(err => {
        })
      }  
    });
  };
  componentWillUnmount() {
    DeviceEventEmitter.remove();
  };
  _onPressInc() {
    this.props.dispatch(increase(10));
  };
  changeuser(e) {
    this.setState({
      user: e
    })
  };
  changepassword(val) {
    this.setState({
      password: val
    })
  };
  submitdata(text) {
    let params = {
        password: this.state.password,
        storeNo: "",
        userName: this.state.user
    }
    commonApi.loginIn(params).then(data => {
      if (data.success === ERROR_OK) {
        storage.save({
          key: 'loginState',
          data: {
            token: data.value.token,
            userName: params.userName,
            passWord: params.password
          }
        });
        alert(data.message);
        // Toast.message(data.message, '', 'center')
      } else {
        alert(data.message);
        // Toast.message(data.message, '', 'center')
      }
    }).catch((res) => {
      alert(res)
    })
  };
  render() {
    return (
      <View style={styles.mainbox}>
        <Headernav title={this.state.title}/>
        <View style={styles.formbox}>
          <Commoninput title="用户名：" defaultvalue={this.state.user} placeholder="请输入用户名" showline={true} onchangeval={(text) => { this.changeuser(text)}}/>
          <Commoninput title="密    码：" defaultvalue={this.state.password} password={true} placeholder="请输入密码" onchangeval={(text) => { this.changepassword(text) }}/>
        </View>
        <Commonbtn style={styles.btn} onclick={() => { this.submitdata() }}/>
        {/* <View>
            <Text>{this.props.counter.count}</Text>
        </View>
        <TouchableOpacity style={styles.start} onPress={() => this._onPressInc()}>
          <Text>加1</Text>
        </TouchableOpacity> */}
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
  start: {
    margin: 10,
    backgroundColor: 'yellow'
  },
  formbox: {
    marginTop: px2dp(10)
  },
  btn: {
    marginTop: px2dp(150),
  },
  btntxt: {
    padding: px2dp(20),
    paddingLeft: px2dp(30),
    paddingRight: px2dp(30),
    borderRadius: px2dp(20),
    borderStyle: "solid",
    borderColor: "#000000",
    backgroundColor: "#000000",
    color: "#FFFFFF"
  }
});


const mapStateToProps = state => ({
  counter: state.counter
})

export default connect(mapStateToProps)(Mine);