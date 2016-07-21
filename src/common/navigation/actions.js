import {NavigationAction} from './constant';

export function switchTab(index: number) {
  return {
    type: NavigationAction.SWITCH_TAB,
    payload: index
  };
}

export function pushRoute(state) {
  return (dispatch,getState) => {
    if (!isNavigationAnimationInProgress(getState())) {
      dispatch({
        type: NavigationAction.PUSH_ROUTE,
        payload: state
      });
    }
  };
}

export function popRoute() {
  return {
    type: NavigationAction.POP_ROUTE
  };
}

export function navigationCompleted() {
  return {
    type: NavigationAction.NAVIGATION_COMPLETED
  };
}

function isNavigationAnimationInProgress(state) {
  return state.getIn(['isNavigating']);
}
