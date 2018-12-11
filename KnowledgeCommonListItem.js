import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Image, InteractionManager, Alert,Platform} from 'react-native';
import Global from '../../styles/Global';
import { default as config } from '../../config/base';


class ProjectCommonListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    navigatorToDoc =(data)=> {
       this.props.navigation.navigate('WebViewCont',{data:data.path_YZ,title:data.title})

    }
    navigatorToDetails =(data)=> {

        this.props.navigation.navigate('KnowledgeDetails',{data:data})

    }

    render() {
        let data = this.props.data;

        return (
            <View  style = {{borderBottomWidth:1,borderBottomColor:'#E8E8E8',width:Global.containerWidthAndHeight.width,flexDirection:'row'}}>
                <TouchableHighlight
                    underlayColor="rgba(34, 26, 38, 0.1)"
                    onPress={() => { this.navigatorToDoc(data)}}
                    style = {{flex:9,flexDirection:'row',marginTop:15,marginBottom:15,marginLeft:10}}
                >
                <View style = {{flex:1,flexDirection:'row'}}>
                    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>

                            <Image source = {require('../../resources/images/lng/wordBig.png')}/>

                    </View>
                    <View style = {{flex:9,justifyContent:'center',alignItems:'flex-start',marginLeft:10}}>
                        <Text style={{fontSize:15,color:'#333333'}} numberOfLines={1} ellipsizeMode ={'tail'}>{data.title }</Text>
                    </View>

                </View>
                </TouchableHighlight>
                <View style = {{flex:1,justifyContent:'center',alignItems:'center',marginRight:10}}>
                    <TouchableHighlight
                         underlayColor="rgba(34, 26, 38, 0.1)"
                        onPress={() => { this.navigatorToDetails(data)}}
                        style = {{}}
                    >
                        <Image source = {require('../../resources/images/lng/dataCheck.png')}/>
                    </TouchableHighlight>
                </View>
            </View>

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
