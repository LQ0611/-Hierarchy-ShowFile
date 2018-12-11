/**
 * 附件
 * 2018-9-5 李红媛
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';

import { default as config } from '../../../../config/base';

class FileItem extends Component<Props> {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        debugger;
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

    renderListItem = ({item, index}) => {
        let name = '';
        if(index === 0) {
            name = this.props.name;
        }

        debugger;
        //doc，pdf，xls，docx，jpg，png，zip
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
        return(
            <TouchableOpacity onPress={() => {this.docClick(item)}} key={index}>
                <View style={{height:1, backgroundColor: '#e8e8e8'}}/>
                <View style={{flexDirection:'row',minHeight:48,paddingLeft:15,paddingRight:15}}>
                    <View style={{flex:0.25,flexDirection:'row',alignItems :'center',justifyContent :'flex-end'}}>
                        <Text style={{fontSize:15,color:'#333333',}}>{name}</Text>
                    </View>
                    <View style={{flex:0.75,marginLeft:20,alignItems:'center',flexDirection:'row'}}>
                        <Image style = {{height:16,width:15}} source = {image}/>
                        <Text numberOfLines={1} style={{fontSize:15,color:'#1890ff',textAlign:'right',marginLeft:8}}>{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View>
                <FlatList
                    data={[this.props.value]}
                    renderItem={this.renderListItem}
                />
            </View>
        );
    }
}

export default FileItem;