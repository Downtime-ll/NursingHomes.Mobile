/// <reference path="../../typings/index.d.ts" />

import {Map} from 'immutable';
import {
    combineReducers
} from 'redux-immutable';
import NavigationStateReducer from '../modules/navigation/reducers';
// import AuthStateReducer from '../modules/auth/AuthState';
import CounterStateReducer from '../modules/counter/CounterState';
import SessionStateReducer, {
    RESET_STATE
} from '../modules/session/SessionState';

const reducers = {
    // Authentication/login state
    // auth: AuthStateReducer,

    counter: CounterStateReducer,
    navigationState: NavigationStateReducer,
    session: SessionStateReducer
};

const immutableStateContainer = Map();
// const getImmutable = (child, key) => child ? child.get(key) : void 0;
// const setImmutable = (child, key, value) => child.set(key, value);

export default combineReducers(
    {
        // Authentication/login state
        // auth: AuthStateReducer,

        // counter: CounterStateReducer,
        navigation: NavigationStateReducer,
        session: SessionStateReducer
    });

// export default function mainReducer(state: any, action: any) {
//     if (action.type === RESET_STATE) {
//         return namespacedReducer(action.payload, action);
//     }

//     return namespacedReducer(state || void 0, action);
// }