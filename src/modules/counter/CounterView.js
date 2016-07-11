import * as CounterState from './CounterState';
import * as NavigationState from '../../modules/navigation/actions';
import React,{PropTypes} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default class CounterView extends React.Component {
  static propTypes= {
    counter: PropTypes.number.isRequired,
    userName: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    onNavigate: PropTypes.func.isRequired
  }

  increment() {
    this.props.dispatch(CounterState.increment());
  }

  reset() {
    this.props.dispatch(CounterState.reset());
  }

  random() {
    this.props.dispatch(CounterState.random());
  }

  bored() {
    this.props.dispatch(NavigationState.pushRoute({key: 'Color',title: 'title',index: 0,isNavigating: true}));
  }

  render() {
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;
    return (
    <View style={styles.container}>
      <TouchableOpacity onPress={this.increment.bind(this)} style={[styles.counterButton, loadingStyle]}>
        <Text style={styles.counter}>
          {this.props.counter}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.reset.bind(this)}>
        <Text style={styles.linkButton}>
          Reset
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.random.bind((this))}>
        <Text style={styles.linkButton}>
          Random
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.bored.bind(this)} accessible={true}>
        <Text style={styles.linkButton}>
          {'I\'m bored!'}
        </Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    alignSelf: 'center'
  },
  counterButton: {
    ...circle,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    padding: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
});
