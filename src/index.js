
import * as React from 'react';
import {Provider} from 'react-redux';

import store from './redux/store';
import AppViewContainer from './AppViewContainer';

import Storage from './common/lib/storage';
import {setConfiguration} from './common/services/configurationService';

global.storage = new Storage();
setConfiguration('API_ROOT','http:192.168.1.106:2412');

export class Root extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <AppViewContainer />
    </Provider>
    );
  }
}
