// / <reference path="../../typings/index.d.ts" />
import * as React from 'react';
import {View} from 'react-native';
import * as snapshoutUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';
import NavigationViewContainer from './navigation/NavigationViewContainer';
import AppRouter from './AppRouter';
import {fetchUserPrefs} from '../common/action';

export default class AppView extends React.Component {
  componentDidMount() {
    debugger;
    const {dispatch} = this.props;
    snapshoutUtil.resetSnapshot()
      .then(snaphot => {

        if (snaphot) {
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snaphot));
        } else {
          dispatch(SessionStateActions.initializeSessionState());
        }

        store.subscribe(() => {
          snapshoutUtil.saveSnapshot(store.getState());
        });
      });

    dispatch(fetchUserPrefs());
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
