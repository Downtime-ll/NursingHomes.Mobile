import {Map,fromJS,List} from 'immutable';
import {handleActions} from 'redux-actions';
import {NurserAction} from './constant';

export const defaultNurserState = fromJS({
  isFetching: true
});
defaultNurserState.datas = new List();

export default handleActions({
  [NurserAction.Request_Nursers]: (state) => {
    return state.set('isFetching', true);
  },
  [NurserAction.Response_Nursers]: (state, action) => {
    return state
      .set('isFetching', false)
      .updateIn(['datas'],list => {
        if (!list) {
          return new List(action.payload.data);
        }
        return list.push(action.payload.data);
      });
  },
  [NurserAction.StartAddNurser]: (state) => {
    return state
      .set('nurserSaving', true);
  },
  [NurserAction.FinishAddNurser]: (state, action) => {
    return state
      .set('nurserSaving', false)
      .set('nurserSavingSuccess',action.payload.success)
      .set('nurserSavingError',action.payload.error)
      .updateIn(['datas'],list => {
        if (!list) {
          return new List(action.payload.data);
        }
        return list.push(action.payload.data);
      });
  }
} ,defaultNurserState);
