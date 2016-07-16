import {NurserAction} from './constant';

function requestNursers(search,pageIndex) {
  return {
    type: NurserAction.Request_Nursers,
    search,
    pageIndex
  };
}

export function fetchNursers(search, pageIndex = 1 , pageSize = 10) {
  return (dispatch) => {
    dispatch(requestNursers(search,pageIndex));

  };
}
