import * as React from 'react';
import {View} from 'react-native';
import * as snapshoutUtil from './utils/snapshot';
import * as SessionStateActions from './common/session/SessionState';
import store from './redux/store';
import NavigationViewContainer from './common/navigation/NavigationViewContainer';
import AppRouter from './AppRouter';

export default class AppView extends React.Component {
  componentDidMount() {
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

    // dispatch(fetchUserPrefs());
  }

  render() {
    return (
    <View style={{flex: 1}}>
      <NavigationViewContainer router={AppRouter} />
    </View>
    );
  }
}
