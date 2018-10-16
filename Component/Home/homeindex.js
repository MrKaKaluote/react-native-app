import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	DeviceEventEmitter,
	TouchableOpacity,
	AsyncStorage
} from 'react-native';
import Homedetail from "./homedetile";
import Headernav from "../Commom/headernav";
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "首页"
		};
	};
	componentDidMount() {
		DeviceEventEmitter.addListener('userNameDidChange', (param) => {
			//点击底部导航按钮后首页执行的操作，比如发送数据请求或刷新页面  
			if (param === '1') {
				// alert(param)
			}
		});
	};
	componentWillUnmount() {
		DeviceEventEmitter.remove();
	};
	getin() {
		// this._handlePress();
	};
	_handlePress() {
		const { navigator } = this.props;
		if (navigator) {
			navigator.push({
				name: 'Homedetail',
				component: Homedetail
			})
		}
	};
	render() {
		return (
			<View style={styles.mainbox}>
				<Headernav title={this.state.title} />
				<TouchableOpacity onPress={this._handlePress.bind(this)}>
					<Text style={styles.container}>Hello,</Text>
					<Text>Hello, Chat 首页!</Text>
				</TouchableOpacity>
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
	container: {
		fontSize: FONT_SIZE(16),
		height: px2dp(36)
	},
});