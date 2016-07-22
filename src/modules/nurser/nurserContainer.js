import {connect} from 'react-redux';
import {fetchNursers,deleteNurser} from './actions';
import NurserView from './nurser';
import * as NavigationState from '../../common/navigation/actions';

export default connect(
  state => {
    return {
      nurserFetching: state.getIn(['nurser','nurserFetching']),
      datas: state.getIn(['nurser','datas']).toJS()
    };
  },
  dispatch => ({
    fetchNursers(search,pageIndex,pageSize,options) {
      dispatch(fetchNursers(search,pageIndex,pageSize,options));
    },
    pushRoute(state) {
      dispatch(NavigationState.pushRoute(state));
    },
    deleteNurser(id) {
      dispatch(deleteNurser(id));
    }
  })
)(NurserView);
