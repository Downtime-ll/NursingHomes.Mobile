import * as React from 'react';
import {StyleSheet, Image, TextInput, Text, TouchableOpacity, View} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Image source={{uri: 'http://oss-hz.qianmi.com/qianmicom/u/cms/qmwww/201511/03102524l6ur.png'}} style={styles.logo} />
      <TextInput style={styles.input} placeholder='用户名' />
      <TextInput style={styles.input} placeholder='密码' password={true} />
      <TouchableOpacity style={styles.btn} onPress={() => console.log('press me')}>
        <Text style={styles.text}>
          登录
        </Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    width: 160,
    height: 160,
    marginTop: 50
  },
  input: {
    marginTop: 10,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: 'lightblue'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFF'
  },
  btn: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3333FF',
    height: 40,
    borderRadius: 5,
    marginTop: 10
  }
});
