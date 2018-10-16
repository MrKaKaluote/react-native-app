import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableHighlight
}
from 'react-native';
import StyleSheet from 'StyleSheet';

export default class Commonbtn extends Component {
    constructor(props) {
        super(props);
    };
    onclickbtn() {
        const { onclick } = this.props;
        if (onclick) {
            onclick();
        }
    };
    render() {
        return (
            <View style={this.props.style}>
                <View style={styles.view}>
                    <TouchableHighlight underlayColor='#F4CF21' style={styles.title} onPress={() => this.onclickbtn()}>
                        <Text style={styles.text}>登录</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    };
}


const styles = StyleSheet.create({
    edit: {
        height: px2dp(88),
        fontSize: FONT_SIZE(16),
        backgroundColor: '#fff',
        width: px2dp(500),
        marginLeft: px2dp(10),  //左右留出一定的空间
        // marginTop: px2dp(10),
        marginRight: px2dp(10)
    },
    title: {
        backgroundColor: '#F4CF21',
        paddingLeft: px2dp(250),
        paddingTop: px2dp(12),
        paddingRight: px2dp(250),
        paddingBottom: px2dp(12),
        borderRadius: px2dp(15),
        // width: px2dp(10)
    },
    text: {
        paddingTop: px2dp(6),
        fontSize: FONT_SIZE(18),
        color: '#FFFFFF'
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: px2dp(10),
        // backgroundColor: '#fff',
        height: px2dp(80),    //通过大于TextInput的高度来弥补上面的问题
        justifyContent: 'center'  //放置到底部
    }
});
