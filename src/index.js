
import * as React from 'react';
import {Provider} from 'react-redux';

import store from './redux/store';
import AppViewContainer from './AppViewContainer';

export class Root extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <AppViewContainer />
    </Provider>
    );
  }
}
