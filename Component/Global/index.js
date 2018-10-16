import React, { Component } from 'react';
import { Dimensions, AsyncStorage, PixelRatio, Platform, Alert } from 'react-native';

// 处理安卓，iOS字体不同的类，使用方法 fontSize:FONT_SIZE(20)
import FontSize from './Fontsize';
// 处理安卓，iOS宽高的区别，使用方法 width:px2dp(20)
import { px2dp, storage } from './Tools';

// import { Toast } from 'teaset';


let { height, width } = Dimensions.get('window');
//全局弹框
// global.Toast = Toast;
// 请求全局状态
global.ERROR_OK = true;
// 系统是iOS
global.iOS = (Platform.OS === 'ios');
// 系统是安卓
global.Android = (Platform.OS === 'android');
// 获取屏幕宽度
global.SCREEN_WIDTH = width;
// 获取屏幕高度
global.SCREEN_HEIGHT = height;
// 获取屏幕分辨率
global.PixelRatio = PixelRatio.get();
// 最小线宽
global.pixel = 1 / PixelRatio;
// 适配字体
global.FONT_SIZE = FontSize;
// 屏幕适配
global.px2dp = px2dp;
// 全局存储
global.storage = storage;
// 全局字体颜色
global.fontcolor = "#474a4f";
// 全局背景色
global.bgcolor = "#F0F0F0";