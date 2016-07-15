import {Map} from 'immutable';
import {combineReducers} from 'redux-immutable';
import NavigationStateReducer, {defaultNavigationState} from '../common/navigation/reducers';
import {userPrefsReducer} from '../common/reducer';
// import AuthStateReducer from '../modules/auth/AuthState'
import CounterStateReducer, {defaultCounterState} from '../modules/counter/CounterState';
import SessionStateReducer, {defaultSessionState} from '../common/session/SessionState';

// const getImmutable = (child, key) => child ? child.get(key) : void 0
// const setImmutable = (child, key, value) => child.set(key, value)
export const defaultAppState = Map({
  userPrefs: {preferredTheme: 'light',preferredFontSize: 14},
  counter: defaultCounterState,
  navigation: defaultNavigationState,
  session: defaultSessionState
});

export default combineReducers(
  {
    // Authentication/login state
    // auth: AuthStateReducer,
    userPrefs: userPrefsReducer,
    counter: CounterStateReducer,
    navigation: NavigationStateReducer,
    session: SessionStateReducer
  });

  // export default function mainReducer(state: any, action: any) {
  //     if (action.type === RESET_STATE) {
  //         return namespacedReducer(action.payload, action)
  //     }

  //     return namespacedReducer(state || void 0, action)
  // }
