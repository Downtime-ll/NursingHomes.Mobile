import {NurserAction} from './constant';
import {get,post,del,put} from '../../common/services/requestService';

const NurserUrlPath = '/api/nurser';

function requestNursers() {
  return {
    type: NurserAction.Request_Nursers
  };
}

function responseNursers(datas) {
  return {
    type: NurserAction.Response_Nursers,
    payload: datas,
    respondAt: Date.now()
  };
}

export async function fetchNursers(search, pageIndex = 1 , pageSize = 10) {
  return async (dispatch) => {
    dispatch(requestNursers());
    let datas = await get(NurserUrlPath,{pageIndex,pageSize});
    dispatch(responseNursers(datas));
  };
}

function startAddNurser() {
  return {
    type: NurserAction.StartAddNurser
  };
}

function finishAddNurser(data) {
  return {
    type: NurserAction.FinishAddNurser,
    payload: data,
    respondAt: Date.now()
  };
}

export async function addNurser(entity) {
  return async (dispatch) => {
    dispatch(startAddNurser());
    let data = await post(NurserUrlPath,entity);
    dispatch(finishAddNurser(data));
  };
}
