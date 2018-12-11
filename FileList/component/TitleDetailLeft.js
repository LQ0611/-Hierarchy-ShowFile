/**
 * 导航栏-详细页
 * 左侧：返回键
 * 右侧：意见
 *  2018-9-4 李红媛
 * */

/**
 * 导航栏 -详情页
 * 左侧：返回键
 * 右侧：搜索
 *  2018-9-5 李红媛
 * */

import React, { Component } from 'react';
import {
    Platform, StyleSheet,
    TouchableOpacity,
    Image,
    View,
    Text,

} from 'react-native';


import Cstyles from "../style/styles";

class Title extends Component<Props> {
    static navigationOptions = {
        header: null
    };

    constructor(props)
    {
        super(props);
    }


    render() {
        return (
            <View  style = {Cstyles.navi}>
                {/*导航栏*/}
                <TouchableOpacity style = {{flex : 1,justifyContent :'center',}}
                                  onPress = {()=>{this.props.param.navigation.goBack()}}>
                    <Image source = {require('../image/back.png')}/>
                </TouchableOpacity>
                <View style = {{flex:4,justifyContent :'center',flexDirection:'row',alignItems:'center'}}>
                    <Text style = {{color : '#ffffff',textAlign :'center',fontSize:18}}>{this.props.title}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent :'flex-end',flex:1,}}/>
            </View>
        );
    }
}
export default Title;