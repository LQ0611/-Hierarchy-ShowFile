/*
*
*  多选员工的 多选列表组件
* */

import React, {Component} from 'react';
import {
    Dimensions,
    Platform,
    Text,
    StyleSheet,
    View,TouchableOpacity,Image,ScrollView,
    Alert
} from 'react-native';
import PropTypes from 'prop-types';
import Cstyles from "../style/styles";
import Server from "../../../../utils/NetWork/Server";
import { default as config } from '../../../../config/base';


class FileItem extends Component {

    static propTypes = {


        data: PropTypes.object,
        cellClicked:  PropTypes.func

    }

    static defaultProps = {

        data: {},
        cellClicked: function () { },

    }
    constructor(props) {
        super(props);

        debugger
        this.state = {
        };
    };
    //跳转到资料详情页
    detailClick(item) {
        debugger;
        this.props.param.navigation.navigate('DetailScreen',
            {ID:item.ID,title:item.title,item:item,func:this.docClick.bind(this)});
    }

    //跳转到文件查看页，永忠地址
    docClick(data){
        debugger;
        //跳转文件打开页面 /APP_PORT.AppPortServ.do    APP_PORT.downloadFile.do
        if(Platform.OS === 'ios'){
            let url =`${config.applicationIpAndPort}shtml`+data.path+ '?act=open';
            debugger;
            this.props.param.navigation.navigate('WebViewCont',{data:url,
                title:data.title});
        }else{
            //Android
            let url =`${config.applicationIpAndPort}shtml`+data.path;
            debugger;
            this.props.param.navigation.navigate('WebViewCont',{data:url, title:data.title});
            /*fetch(url).then((res) => {
                console.log(res);
                if(res.url.endsWith('?act=open') === true){
                    this.props.param.navigation.navigate('WebViewCont',{data:res.url.replace('?act=open', ''),
                        title:data.ML_NAME});
                } else{
                    this.props.param.navigation.navigate('WebViewCont',{data:res.url, title:data.ML_NAME});
                }
            });*/
        }
    }

    render() {
        let item = this.props.data;
        debugger;
        let image ;
        if(item.type === 'doc' || item.type === 'docx') {
            image = require('../image/icon_word.png');
        } else if(item.type === 'pdf') {
            image = require('../image/icon_pdf.png');
        }else if(item.type === 'xls'||item.type==='xlsx') {
            image = require('../image/icon_excel.png');
        }else if(item.type === 'jpg' || item.TYPE === 'png') {
            image = require('../image/icon_jpg.png');
        }else if(item.type === 'txt') {
            image = require('../image/icon_txt.png');
        }
        return (
            <View style={Cstyles.TabListItem} >
                <TouchableOpacity onPress={() => {this.docClick(item)}} style={{flex: 1,flexDirection:'row',alignItems : 'center',}}>
                    <Image  source = {image} style={{}}/>
                    <View style={{flex: 1, marginLeft: 20,justifyContent : 'center',height:70,}}>
                        <View style={{flex: 1,flexDirection:'row',alignItems:'center',marginTop:8}}>
                            <Text numberOfLines={1} style={{color: '#333333', fontSize: 15,minHeight:16}}>{item.title}</Text>
                        </View>
                        <View style={{flex: 1,marginTop:8,flexDirection:'row'}}>
                            <Text style={{flex: 0.6,color: '#666666', fontSize: 13,}}>{item.time&&item.time.substring(0,19)}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.detailClick(item)}}>
                    <Image  source = {require('../image/detail.png')}/>
                </TouchableOpacity>
            </View>

        );
    }
}


const styles = StyleSheet.create({

});
export default FileItem;
