import {connect} from 'react-redux';
import {popRoute, switchTab, navigationCompleted} from './actions';
import NavigationView from './NavigationView';

export default connect(
  state => {
    return {navigationState: state.get('navigation').toJS()};
  },
  dispatch => ({
    switchTab(index) {
      dispatch(switchTab(index));
    },
    onNavigateBack() {
      dispatch(popRoute());
    },
    onNavigateCompleted() {
      dispatch(navigationCompleted());
    }
  })
)(NavigationView);
