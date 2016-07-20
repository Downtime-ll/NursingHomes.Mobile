import {Map} from 'immutable';
import {combineReducers} from 'redux-loop';
import NavigationStateReducer, {defaultNavigationState} from '../common/navigation/reducers';
import {userPrefsReducer} from '../common/reducer';
// import AuthStateReducer from '../modules/auth/AuthState'
import CounterStateReducer, {defaultCounterState} from '../modules/counter/CounterState';
import SessionStateReducer, {defaultSessionState, RESET_STATE} from '../common/session/SessionState';
import NurserReducer from '../modules/nurser/reducer';

// const getImmutable = (child, key) => child ? child.get(key) : void 0
// const setImmutable = (child, key, value) => child.set(key, value)
export const defaultAppState = Map({
  userPrefs: {preferredTheme: 'light',preferredFontSize: 14},
  counter: defaultCounterState,
  navigation: defaultNavigationState,
  session: defaultSessionState
});

const reducers = {
    // Authentication/login state
    // auth: AuthStateReducer,
  nurser: NurserReducer,
  userPrefs: userPrefsReducer,
  counter: CounterStateReducer,
  navigation: NavigationStateReducer,
  session: SessionStateReducer
};

// initial state, accessor and mutator for supporting root-level
// immutable data with redux-loop reducer combinator
const immutableStateContainer = Map();
const getImmutable = (child, key) => child ? child.get(key) : void 0;
const setImmutable = (child, key, value) => child.set(key, value);

const namespacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable
);

export default function mainReducer(state, action) {
  if (action.type === RESET_STATE) {
    return namespacedReducer(action.payload, action);
  }

  return namespacedReducer(state || void 0, action);
}
