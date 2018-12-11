import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const TabBar_HEIGHT = 50;
export const Tabs_HEIGHT = 42;
const StatusBar_HEIGHT = StatusBar.currentHeight;
export const PrimaryColor = 'rgb(45,128,217)';
export const NavBarHeight = Platform.OS === 'ios'? 60 : 44;
export const borderWidth = StyleSheet.hairlineWidth;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                height: WINDOW_HEIGHT-TabBar_HEIGHT-Tabs_HEIGHT-20,
            },
            android: {
                height: WINDOW_HEIGHT-TabBar_HEIGHT-Tabs_HEIGHT-StatusBar_HEIGHT,
            },
        }),
    },
    navi: {
        paddingLeft: 18,
        paddingRight: 18,
        justifyContent: 'space-between',
        backgroundColor: 'rgb(45,128,217)',
        height: Platform.OS === 'android' ? 45 : WINDOW_HEIGHT * 0.1,
        width: WINDOW_WIDTH,
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                paddingTop: 22
            },
            android: {
                alignItems: 'center',
            }

        })
    },
    search_navi : {
        backgroundColor : '#EFEFF4',
        height: Platform.OS === 'android' ? 45 : WINDOW_HEIGHT*0.1,
        width : WINDOW_WIDTH,
        ...Platform.select({
            ios : {
                paddingTop:  22
            },
            android : {
                alignItems: 'center',
            }

        })
    },
    TabListItem : {
        flexDirection: 'row',
        height: 77,
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#e8e8e8',
        borderTopWidth: 0.5,
        borderTopColor: '#e8e8e8',
        backgroundColor: '#ffffff',
        alignItems : 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
});

export default styles;
