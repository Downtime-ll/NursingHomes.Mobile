import {connect} from 'react-redux';
import AppView from './AppView';

export default connect(
  state => {
    debugger;
     return {
    isReady: state.getIn(['session', 'isReady']),
    userPrefs: state.getIn(['userPrefs'])
  // isLoggedIn: state.getIn(['auth', 'isLoggedIn'])
  };}
)(AppView);
