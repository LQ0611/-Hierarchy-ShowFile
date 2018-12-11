/**
 * 详情页面
 * 2018-11-17 李红媛
 */

import React, { Component } from 'react';
import {
    Platform, StyleSheet,
    TouchableOpacity,
    Image,
    View,
    Text,
    ScrollView, Alert
} from 'react-native';

import Title from './component/TitleDetailLeft';
import Server from "../../../utils/NetWork/Server";
import ProjectOADetailsCommonItem from '../../common/ProjectOADetailsCommonItem';
import File from './selectingFile/FileItemInDetailScreen';
import {Toast} from 'antd-mobile-rn'

class DetailScreen extends Component<Props> {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            data:{},
            loading : true,
        };
        this.ID = this.props.navigation.state.params.ID;
        this.title=this.props.navigation.state.params.title;
        this.item=this.props.navigation.state.params.item;
        debugger
    }

    async componentDidMount() {
        //获取详情数据
        try {
            Toast.loading('loading....',0,()=>{},true)
            let ID = this.ID;
            let result = await Server.getFileDetail({ID});
            debugger;
            if(result.ok === '0'){
                this.setState({
                    data:result._DATA_,
                });
            }
            Toast.hide();
        }catch (e){
            console.log(e);
            Alert.alert('请求数据出错！');
            Toast.hide()
        }
    }


    //ID	ZL_ID
    //标题	ZL_NAME
    //关键字	ZL_KEYWORD
    //内容摘要	ZL_ABSTRACT
    //编码	ZL_CODE
    //编制单位	ZL_BIAN_ZHI_DAN_WEI_ID__NAME
    //上传日期	ZL_RELEASE_DATE
   // FILES: {ID:’123444’,NAME:’用章申请’ ,TYPE:’word’//文件类型}//附件



    render() {

        return (
            <View style={{flex:1,backgroundColor:'#ffffff'}}>

                <Title param={this.props} title={'资料详情'} />

                {/*内容*/}
                <ScrollView
                    style={{flex: 1}}
                    automaticallyAdjustContentInsets={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'目录'}
                        content = {this.state.data.column_name}
                    />
                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'编号'}
                        content = {this.state.data.code}
                    />
                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'名称'}
                        content = {this.title}
                    />

                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'代替编号'}
                        content = {this.state.data.re_code}
                    />

                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'文件版本'}
                        content = {this.state.data.version}
                    />
                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'发布状态'}
                        content = {this.state.data.fileStatus}
                    />
                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'发布单位'}
                        content = {this.state.data.public_dept}
                    />

                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'编制单位'}
                        content = {this.state.data.drf_dept}
                    />

                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'发布日期'}
                        content = {this.state.data.public_date&&this.state.data.public_date.substring(0,19)}
                    />
                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'实施日期'}
                        content = {this.state.data.act_date&&this.state.data.act_date.substring(0,19)}
                    />
                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'年份'}
                        content = {this.state.data.year}
                    />

                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'关键字'+'\n'+'索引'}
                        content = {this.state.data.keywords}
                    />

                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'适应类型'}
                        content = {this.state.data.type}
                    />
                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'状态'}
                        content = {this.state.data.status}
                    />
                    <ProjectOADetailsCommonItem
                        navigator={this.props.navigator}
                        title = {'备注'}
                        content = {this.state.data.remarks}
                    />

                    <File name={'附件'} value={this.item} param={this.props}/>



                </ScrollView>
            </View>
        );
    }
}

export default DetailScreen;