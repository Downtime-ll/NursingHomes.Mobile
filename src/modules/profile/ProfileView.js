import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';
import Colors from '../common/Colors';

const Icon = require('react-native-vector-icons/Ionicons');
const ICON_SIZE = 20;

export default class ProfileView extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <ScrollView automaticallyAdjustContentInsets={false} scrollEventThrottle={200} style={styles.scrollView}>
        <TouchableHighlight style={styles.userTouch}>
          <View style={styles.user}>
            <View style={styles.nameInfo}>
              <Text style={styles.name}>
                text
              </Text>
            </View>
            <Text style={[styles.loginState]}>
              text
            </Text>
            <Icon
              name='ios-home'
              size={ICON_SIZE}
              iconStyle={styles.arrow}
              color={Colors.textGray} />
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
    flex: 1
  },
  userTouch: {
    marginTop: 20
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
    borderColor: '#EDECF1'
  },
  avatar: {
    borderRadius: 2,
    width: 48,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 0.5
  },
  nameInfo: {
    flexDirection: 'column',
    marginLeft: 8,
    justifyContent: 'center',
    flex: 1
  },
  name: {
    color: 'black',
    fontSize: 17
  },
  arrow: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    marginRight: 10
  },
  settings: {
    height: 44
  },
  loginState: {
    marginRight: 5
  },

  scrollView: {
    height: 1000
  }
});
