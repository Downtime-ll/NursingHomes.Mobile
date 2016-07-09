// / <reference path="../../typings/index.d.ts" />
import * as React from 'react';
import {View} from 'react-native';
import * as snapshoutUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';
import NavigationViewContainer from './navigation/NavigationViewContainer';
import AppRouter from './AppRouter';

export default class AppView extends React.Component {
  componentDidMount() {
    snapshoutUtil.resetSnapshot()
      .then(snaphot => {
        const {dispatch} = this.props;

        if (snaphot) {
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snaphot));
        } else {
          dispatch(SessionStateActions.initializeSessionState());
        }

        store.subscribe(() => {
          snapshoutUtil.saveSnapshot(store.getState());
        });
      });
  }

  // private componentWithReceiveProps()

  render() {
    return (
    <View style={{flex: 1}}>
      <NavigationViewContainer router={AppRouter} />
    </View>
    );
  }
}
