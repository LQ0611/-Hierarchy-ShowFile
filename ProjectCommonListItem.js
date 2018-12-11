import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, InteractionManager, Alert} from 'react-native';
import Global from '../../styles/Global';
import {StrUtils} from '../../utils';

class ProjectCommonListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    navigatorToTodoCard =(data)=> {
         debugger
         if (StrUtils.strContains(this.props.type,'SW') || StrUtils.strContains(data.type,'SW')||data.type==="1"){
             this.props.navigation.navigate('ProjectOAInDetails',{data:data,type:this.props.type});
         }else if (StrUtils.strContains(this.props.type,'FW') || StrUtils.strContains(data.type,'FW')||data.type==="2"){
             this.props.navigation.navigate('ProjectOAOutDetails',{data:data,type:this.props.type});
         }else if (data.type === 'YBDB' || data.type ==='DBDB' || this.props.type ==='GCDB'){
             this.props.navigation.navigate('DecisionAnalysisGCDBDetails',{data:data,type:this.props.type});
         }else if (StrUtils.strContains(this.props.type,'GCBG')){
             this.props.navigation.navigate('DecisionAnalysisGCBGDetails',{data:data,type:this.props.type});

         }
    }

    render() {
         let data = this.props.data;

        return (
                    <TouchableOpacity
                        // underlayColor="rgba(34, 26, 38, 0.1)"
                        onPress={() => {this.navigatorToTodoCard(data)}}
                        style = {{borderBottomWidth:1,borderBottomColor:'#E8E8E8',width:Global.containerWidthAndHeight.width,height:70}}
                    >
                        <View style={{flexDirection:'row',flex:1,alignItems:'center',justifyContent:"space-between",padding:10}}>
                            <View style={{flexDirection:'row',alignItems:'center',flex:8}}>

                                {/*项目名称、工程单元*/}
                                <View style={{flex:3}}>
                                    <Text style={{fontSize:15,color:'#333333'}} numberOfLines={1} ellipsizeMode ={'tail'}>{data.titleOrPeople ? data.titleOrPeople :data.people}</Text>
                                    <Text style={{fontSize:12,color:'#999999',marginTop:5,}}>{data.depOrContent ? data.depOrContent: data.title}</Text>
                                </View>

                            </View>

                            {/*时间 、 按钮 */}
                            <View style={{flex:3,alignItems:'flex-end'}}>

                                <Text style={{fontSize:12,color:'#999999'}}>{data.date.slice(5,data.date.length)}</Text>

                                <View style={{width:60,height:22,
                                    justifyContent:'center',alignItems:'flex-end',marginTop:5}}>
                                    <Text style={{fontSize:12,color:'#999999',}}>{data.status ? data.status : ''}</Text>
                                </View>

                            </View>
                        </View>
                    </TouchableOpacity>

        );
    }
}
const styles = StyleSheet.create({
    itemBox: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fafafa',
        borderRadius: 7,
        // alignItems: 'center',
    },
    todoIconBox: {
        width: 27,
        height: 27,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 13,
        // borderRadius: 50,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    todoHisIconBox: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        borderWidth: 3,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{rotate: '-30deg'}]
    },
    icon: {
        fontSize: 30,
        color: '#fff',
        fontWeight: '400',
    },
    contentBox: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 3,
    },
    contentTitle: {
        color: '#101010',
        fontSize: 17,
        fontWeight: "400",
    },
    statusBox: {
        textAlign: 'center',
        borderRadius: 5,
    }
});
export default ProjectCommonListItem;
