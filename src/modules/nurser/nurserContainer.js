import {connect} from 'react-redux';
import {fetchNursers} from './actions';
import NurserView from './nurser';
import * as NavigationState from '../../common/navigation/actions';

export default connect(
  state => {
    return {navigationState: state.get('navigation').toJS()};
  },
  dispatch => ({
    fetchNursers() {
      dispatch(fetchNursers());
    },
    pushRoute(state) {
      dispatch(NavigationState.pushRoute(state));
    }
  })
)(NurserView);
