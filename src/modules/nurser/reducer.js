import {Map,fromJS,List} from 'immutable';
import {handleActions} from 'redux-actions';
import {NurserAction} from './constant';

export const defaultNurserState = fromJS({
  isFetching: true,
  datas: new List()
});
defaultNurserState.datas = new List();

export default handleActions({
  [NurserAction.ClearNursers]: (state) => {
    return state.set('datas', new List());
  },
  [NurserAction.Request_Nursers]: (state) => {
    return state.set('nurserFetching', true);
  },
  [NurserAction.Response_Nursers]: (state, action) => {
    return state
      .set('nurserFetching', false)
      .set('nurserFetchingSuccess',action.payload.success)
      .set('nurserFetchingError',action.payload.error)
      .updateIn(['datas'],list => {
        var result = list;
        if (action.payload.success) {
          var datas = action.payload.result.items;
          for (let index = 0;index < datas.length;index++) {
            result = result.push(fromJS(datas[index]));
          }
        }
        return result;
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
        return list.push(fromJS(action.payload.result));
      });
  },

  [NurserAction.StartDeleteNurser]: (state) => {
    return state
      .set('nurserDeleting', true);
  },
  [NurserAction.FinishDeleteNurser]: (state, action) => {
    return state
      .set('nurserDeleting', false)
      .set('nurserDeletingSuccess',action.payload.success)
      .set('nurserDeletingError',action.payload.error)
      .updateIn(['datas'],list => {
        return list.filter(item => item.get('id') !== action.payload.result);
      });
  }
} ,defaultNurserState);
