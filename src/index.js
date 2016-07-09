// / <reference path="../typings/index.d.ts" />

import * as React from 'react';
import {Provider} from 'react-redux';

import store from './redux/store';
import AppViewContainer from './modules/AppViewContainer';

export class Root extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <AppViewContainer />
    </Provider>
    );
  }
}
