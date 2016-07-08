/// <reference path="../../../typings/index.d.ts" />

import {fromJS} from 'immutable';
import {IAction, IActionGeneric, IDispatch} from 'redux';
import {handleActions, Action} from 'redux-actions';
import {NavigationAction} from './constant';
import {NavigationState, IRecord, NavigationStateRecord} from '../../models/navigation';

export default handleActions<NavigationState, NavigationState>({
    [NavigationAction.PUSH_ROUTE]: (state: IRecord<NavigationState>, action: Action<NavigationState>) => {
        return <any>state
            .set('isNavigating', true)
            .updateIn(['routes', state.get('index')], tabState => {
                tabState
                    .update('routes', routes => routes.push(fromJS(action.payload)))
                    .set('index', tabState.get('routes').size);
            });
    },
    [NavigationAction.POP_ROUTE]: (state: IRecord<NavigationState>, action: Action<NavigationState>) => {
        return state
            .set('isNavigating', true)
            .updateIn(['routes', state.get('index')], tabState =>
                tabState
                    .update('routes', routes => routes.pop())
                    .set('index', tabState.get('routes').size - 2)
            );
    },
    [NavigationAction.SWITCH_TAB]: (state: IRecord<NavigationState>, action: Action<NavigationState>) => {
        return state.set('index', action.payload);
    },
    [NavigationAction.NAVIGATION_COMPLETED]: (state: IRecord<NavigationState>, action: Action<NavigationState>) => {
        return state.set('isNavigating', false);
    }
}, NavigationStateRecord());

