import {NurserAction} from './constant';
import {get,post,del,put} from '../../common/services/requestService';

const NurserUrlPath = '/api/nurser';

function clearNursers() {
  return {
    type: NurserAction.ClearNursers
  };
}

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

export async function fetchNursers(search, pageIndex = 1 , pageSize = 10, options) {
  let myoptions = {...options};
  return async (dispatch) => {
    if (myoptions.caching === false) {
      dispatch(clearNursers());
    }
    dispatch(requestNursers());
    let result = await get(NurserUrlPath,{pageIndex,pageSize});
    dispatch(responseNursers(result));
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

function startDeleteNurser() {
  return {
    type: NurserAction.StartDeleteNurser
  };
}

function finishDeleteNurser(data) {
  return {
    type: NurserAction.FinishDeleteNurser,
    payload: data,
    respondAt: Date.now()
  };
}

export async function deleteNurser(id) {
  return async (dispatch) => {
    dispatch(startDeleteNurser());
    let data = await del(NurserUrlPath + '/' + id);
    dispatch(finishDeleteNurser(data));
  };
}
