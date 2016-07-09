import {fromJS} from 'immutable';
import {handleActions} from 'redux-actions';
import {NavigationAction} from './constant';

export const defaultNavigationState = fromJS(
  createNavigationState('MainNavigation', 'App', null, [
    createNavigationState('HomeTab', 'Home', 'ios-home', [createNavigationState('Counter', 'Counter')]),
    createNavigationState('ProfileTab', '我', 'ios-person', [createNavigationState('Profile', '我')])
  ]));

function createNavigationState(key, title, iconName, routes) {
  return {
    key,
    title,
    iconName,
    index: 0,
    routes,
    isNavigating: false
  };
}

export default handleActions({
  [NavigationAction.PUSH_ROUTE]: (state, action) => {
    return state
      .set('isNavigating', true)
      .updateIn(['routes', state.get('index')], tabState => {
        tabState
          .update('routes', routes => routes.push(fromJS(action.payload)))
          .set('index', tabState.get('routes').size);
      });
  },
  [NavigationAction.POP_ROUTE]: (state) => {
    return state
      .set('isNavigating', true)
      .updateIn(['routes', state.get('index')], tabState => tabState
        .update('routes', routes => routes.pop())
        .set('index', tabState.get('routes').size - 2)
    );
  },
  [NavigationAction.SWITCH_TAB]: (state, action) => {
    return state.set('index', action.payload);
  },
  [NavigationAction.NAVIGATION_COMPLETED]: (state) => {
    return state.set('isNavigating', false);
  }
}, defaultNavigationState);
