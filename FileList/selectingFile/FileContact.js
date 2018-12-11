/*
*   开始选择员工页面---公司-部门-员工
* */

import React, {Component} from 'react';
import {
    Dimensions,
    Platform,
    Text,
    StyleSheet,
    View,TouchableOpacity,Image,ScrollView,
    Alert,
    FlatList,
} from 'react-native';
import PropTypes from 'prop-types';

import SelectedPeopleItem from './FileItem'
import  SelectedCD from './FileCD';
import Cstyles from "../style/styles";

const { width, height } = Dimensions.get('window');
const now = new Date();

class FileContact extends Component {

    static navigationOptions = {
        header: null
    };
    static propTypes = {

        sureClicked:  PropTypes.func
    }

    static defaultProps = {
        sureClicked: function () { }
    }
    constructor(props) {
        super(props);
        this.state = {
            type : true,//true : 文件夹,false:文件
            selectedData : [],//选中的
            selectingData : [],//列表当前展示的数据
            selectedPeople : [],//已经选中的
            data: this.props.data.data||[],//所有的数据
            refreshing:false,
        };
       this.state.selectingData = this.state.data;
        debugger;
       console.log("props",props);

    }
    componentWillMount() {
    }

    //点击了公司和部门的列表
    clickCompany1 = (data)=>{
        debugger
        let selectedArr = this.state.selectedData.concat([data])
         if (data.type==='folder'){
             //部门

             this.setState({
                 type: true,
                 selectingData : data.child,
                 selectedData : selectedArr
             })
         }else if (data.type==='file'){
             //人员
             this.setState({
                 type: false,
                 selectingData : data,
                 selectedData : selectedArr
             })
         }
    }

    //点击了公司部门标签
    clickCD = (data,index)=>{
        debugger;
        if (index === -1){
            //点击了请选择

        }else if (index === 0){
            this.setState({
                type: true,
                selectingData : this.state.data,
                selectedData : [],
            })
        }else {
            this.setState({
                type: true,
                selectingData : this.state.selectedData[index-1].child,
                selectedData : this.state.selectedData.slice(0,index),
            })
        }

    }

    renderListItem = ({item, index}) => {
        if (item.type==='folder') {
            debugger;
            return (
                <TouchableOpacity onPress={() => {this.clickCompany1(item)}} key={index}>
                    <View style={Cstyles.TabListItem}>
                        <Image  source = {require('../image/file.png')}/>
                        <View style={{flex: 1, marginLeft: 20}}>
                            <View style={{flex: 1,flexDirection:'row',alignItems:'center',}}>
                                <Text numberOfLines={1} style={{color: '#333333', fontSize: 15,minHeight:16}}>{item.title}</Text>
                            </View>

                        </View>
                        <Image  source = {require('../image/rightR.png')}/>
                    </View>
                </TouchableOpacity>
            )
        }else{
            return (
                <SelectedPeopleItem
                    param={this.props.param}
                    data={item} key ={index}
                />
            )
        }
    }

    ListEmptyComponent(){
        return(
            <View style={{height:200,justifyContent:'center',alignItems:'center'}}>
                <Text>当前目录下，暂无数据</Text>
            </View>
        )
    }

    render() {
        return (
            <View style = {{height:height,backgroundColor:'#f5f5f5'}}>

                <View style={{ padding:9,backgroundColor:'#f5f5f5'}}>

                     {/*展示 公司 部门*/}

                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}
                        style={{ padding:5,backgroundColor:'#f5f5f5',flexDirection:'row',}}>

                            <Text style={{fontSize: 13, color: "#999999"}}>知识库 </Text>

                        <Image
                            style={{marginLeft:5,marginRight:5}}
                            source = {require('../image/rightR.png')}
                        />

                        {
                             this.state.selectedData.map((item,index)=>{

                              return  <SelectedCD data={item} index={index} cellClicked={this.clickCD} key={index}/>
                           })
                           }

                    </ScrollView>
                </View>



                <FlatList
                    data={this.state.selectingData}
                    renderItem={(item)=>this.renderListItem(item)}
                    style={{height:height,marginBottom:40}}
                    ListEmptyComponent={()=>this.ListEmptyComponent()}
                />





            </View>
        );
    }
}

export default FileContact;
