import * as React from 'react';
import {View} from 'react-native';
import * as snapshoutService from './common/services/snapshotService';
import * as SessionStateActions from './common/session/SessionState';
import store from './redux/store';
import NavigationViewContainer from './common/navigation/NavigationViewContainer';
import AppRouter from './AppRouter';

export default class AppView extends React.Component {
  componentDidMount() {

    const {dispatch} = this.props;
    // snapshoutService.resetSnapshot()
    //   .then(snaphot => {

    //     if (snaphot) {
    //       dispatch(SessionStateActions.resetSessionStateFromSnapshot(snaphot));
    //     } else {
    //       dispatch(SessionStateActions.initializeSessionState());
    //     }

    //     store.subscribe(() => {
    //       snapshoutService.saveSnapshot(store.getState());
    //     });
    //   });

    // dispatch(fetchUserPrefs());
  }

  render() {
    console.log("aaa");
    return (
    <View style={{flex: 1}}>
      <NavigationViewContainer router={AppRouter} />
    </View>
    );
  }
}
