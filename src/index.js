
import * as React from 'react';
import {Provider} from 'react-redux';

import store from './redux/store';
import AppViewContainer from './AppViewContainer';

import Storage from './common/lib/storage';
global.storage = new Storage();

export class Root extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <AppViewContainer />
    </Provider>
    );
  }
}
