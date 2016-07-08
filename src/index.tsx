/// <reference path="../typings/index.d.ts" />

import * as  React from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import store from './redux/store';
import AppViewContainer from './modules/AppViewContainer';

export class Root extends React.Component<any, any> {
  public render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}
