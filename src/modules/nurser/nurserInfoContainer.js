import {connect} from 'react-redux';
import {fetchNursers,addNurser} from './actions';
import NurserInfo from './nurserInfo';
import * as NavigationState from '../../common/navigation/actions';

export default connect(
  state => {
    return {
      nurserSaving: state.getIn(['nurser','nurserSaving']),
      nurserSavingSuccess: state.getIn(['nurser','nurserSavingSuccess'])
    };
  },
  dispatch => ({
    fetchNursers() {
      dispatch(fetchNursers());
    },
    addNurser(entity) {
      dispatch(addNurser(entity));
    },
    pushRoute(state) {
      dispatch(NavigationState.pushRoute(state));
    },
    popRoute() {
      dispatch(NavigationState.popRoute());
    }
  })
)(NurserInfo);
