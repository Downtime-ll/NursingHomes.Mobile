import {fromJS} from 'immutable';
import {handleActions} from 'redux-actions';
import {NavigationAction} from './constant';

export const defaultNavigationState = fromJS(
  createNavigationState('MainNavigation', 'App', null, [
    createNavigationState('HomeTab', 'Home', 'ios-home', [createNavigationState('Counter', 'Counter')]),
    createNavigationState('NurserListTab', '护工列表', 'ios-home', [createNavigationState('Nurser', 'Nurser')]),
    createNavigationState('ProfileTab', '我', 'ios-person', [createNavigationState('Profile', '我')])
  ]));

function createNavigationState(key, title, iconName, routes, shouldRenderHeader = false) {
  return {
    key,
    title,
    iconName,
    index: 0,
    routes: routes || [],
    isNavigating: false,
    shouldRenderHeader
  };
}

export default handleActions({
  [NavigationAction.PUSH_ROUTE]: (state, action) => {
    var nav = {...createNavigationState(),...action.payload};
    return state
      .set('isNavigating', true)
      .updateIn(['routes', state.get('index')], tabState =>
        tabState
          .update('routes', routes => routes.push(fromJS(nav)))
          .set('index', tabState.get('routes').size)
      );
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
