/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Image,
    TouchableOpacity,
    Navigator,
    Alert,
} from 'react-native';
const Platform = require('Platform');
import Colors from '../common/Colors';

const Icon = require('react-native-vector-icons/Ionicons');
const ICON_SIZE = 20;

interface ProfileViewProps extends React.Props<ProfileView> {
}

export default class ProfileView extends React.Component<ProfileViewProps, any> {
    public render() {
        let top = 0;
        if (Platform.OS === 'android') {
            top = 44;
        }
        return (
            <View style={styles.container as any}>
                <ScrollView
                    automaticallyAdjustContentInsets={false}
                    scrollEventThrottle={200}
                    style={styles.scrollView}
                    contentOffset={{ x: 0, y: -64 }}
                    >
                    <TouchableHighlight
                        style={styles.userTouch}>
                        <View style={styles.user as any}>
                            <View style={styles.nameInfo as any}>
                                <Text style={styles.name}>
                                    text
                                </Text>
                            </View>
                            <Text
                                style={[styles.loginState]}>
                                text
                            </Text>
                            <Icon
                                name='ios-home'
                                size={ICON_SIZE}
                                iconStyle={styles.arrow}
                                color={Colors.textGray}/>
                        </View>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0EFF5',
        flex: 1,
    },
    userTouch: {
        marginTop: 20,
    },
    user: {
        padding: 8,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#EDECF1',
    },
    avatar: {
        borderRadius: 2,
        width: 48,
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    nameInfo: {
        flexDirection: 'column',
        marginLeft: 8,
        justifyContent: 'center',
        flex: 1,
    },
    name: {
        color: 'black',
        fontSize: 17,
    },
    arrow: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        marginRight: 10
    },
    settings: {
        height: 44,
    },
    loginState: {
        marginRight: 5,
    },


    scrollView: {
        height: -1
    },
});