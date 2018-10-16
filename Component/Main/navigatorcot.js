import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'
import tabcomponent from "./tabbar"
export default class Navigatorcot extends Component {
  render(){
    return(
      <Navigator
        style={{flex:1}}
        initialRoute={{ name: 'tabcomponent', component: tabcomponent }}
        configureScene={() => {// 过渡动画
          return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.passProps} navigator={navigator} />;
        }}
      />
    )
  }
}