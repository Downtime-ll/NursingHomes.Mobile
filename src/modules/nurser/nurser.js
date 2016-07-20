import * as NavigationState from '../../common/navigation/actions';
import React,{PropTypes} from 'react';
import {StyleSheet, TouchableOpacity, Text, View,TouchableHighlight} from 'react-native';
import styles from './stylesheet';
import NavBar from '../../common/components/navbar';

export default class NurserList extends React.Component {
  componentDidMount() {
    this.props.fetchNursers();
  }
  render() {
    return (
      <View style={styles1.container}>
        <NavBar title='护工列表' rightButton='添加'/>
      </View>
    );
  }
}

var styles1 = {
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  navBar: {
    height: 64,
    backgroundColor: '#CCC'
  },
  row: {
    padding: 10,
    height: 44
  }
};
