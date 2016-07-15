import * as React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import t from 'tcomb-form-native';
import Alert from '../../common/components/alert';
import LoadMore from '../../common/components/loadmore';
import Toast from '../../common/components/toast';

import PhotoForm from '../../common/components/form/PhotoForm';

var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
  name: t.String, // a required string
  surname: t.maybe(t.String), // an optional string
  age: t.Number, // a required number
  rememberMe: t.Boolean // a boolean
});
var options = {
  fields: {
    name: {
      factory: PhotoForm
    },
    surname: {
      label: '用户名',
      auto: 'password',
      placeholder: 'Your placeholder here',
      help: 'Your help message here'
    }
  }
};

const AwesomeProject = React.createClass({
  onPress() {
    Toast.show("登录失败");
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();

    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  },

  render() {
    return (
    <View style={styles.container}>
      <Form ref='form' type={Person} options={options} />
      <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>
          Save
        </Text>

      </TouchableHighlight>
       <Alert ref={(view) => {this._alert = view; }}/>
    </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default AwesomeProject;
