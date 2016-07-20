import {connect} from 'react-redux';
import {fetchNursers} from './actions';
import NavigationView from './nurser';

export default connect(
  state => {
    return {navigationState: state.get('navigation').toJS()};
  },
  dispatch => ({
    fetchNursers() {
      dispatch(fetchNursers());
    }
  })
)(NavigationView);
