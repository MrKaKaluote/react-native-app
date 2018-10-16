import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';
import Headernav from "../Commom/headernav";
var newData = [
    {"title" : "icon", "img" : "icon"},
    {"title" : "lufei", "img" : "lufei"},
    {"title" : "icon", "img" : "icon"},
    {"title" : "lufei", "img" : "lufei"},
    {"title" : "icon", "img" : "icon"},
    {"title" : "lufei", "img" : "lufei"},
    {"title" : "icon", "img" : "icon"},
    {"title" : "lufei", "img" : "lufei"},
    {"title" : "icon", "img" : "icon"},
    {"title" : "lufei", "img" : "lufei"},
    {"title" : "icon", "img" : "icon"},
    {"title" : "lufei", "img" : "lufei"},
    {"title" : "icon", "img" : "icon"},
    {"title" : "lufei", "img" : "lufei"}
]
export default class Homedetail extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 != r2});
        var _that = this
        this.state = {
            title: "商品详情",
            dataSource : ds.cloneWithRows(newData)
        };
    };
    goback() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    };
    _pressRow(data, index){
        newData.forEach(item => {
            if (item.isclick) {
                item.isclick = ''
            }
        })
        newData[index].isclick = '123'
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 != r2});
        this.setState({
            dataSource: ds.cloneWithRows(newData)
        });
    };
    render() {
        return (
            <View style={styles.container1}>
                <Headernav title={this.state.title} />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    };
    renderRow(rowData, id, index){
        return(
            <TouchableOpacity onPress = {() =>this._pressRow(rowData, index)} underlayColor = "transparent" >
            <View style={[styles.itemStyle, rowData.isclick == '123' ? styles.tittle : '']}>
                <Image style={styles.imageStyle}/>
                <View style={styles.subItemStyle}>
                    <Text style={{marginTop:5, fontSize:17}}>{rowData.title}</Text>
                    <Text style={{marginTop:5, fontSize:17}}>{rowData.isclick}</Text>
                    <Text style={{marginBottom:5, fontSize:13, color:'green'}}>简介</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: "#ffffff",
        flex:1
    },
    itemStyle: {
        // 主轴方向
        flexDirection:'row',
        // 下边框
        borderBottomWidth:1,
        borderBottomColor:'gray'
    },
    tittle: {
        backgroundColor: "#cccccc"
    },
    imageStyle: {
        // 尺寸
        width:60,
        height:60,
        // 边距
        marginLeft:10,
        margin:10
    },

    subItemStyle: {
        // 对齐方式
        justifyContent:'space-around'
    }
});