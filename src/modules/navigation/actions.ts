/// <reference path="../../../typings/index.d.ts" />

import {fromJS} from 'immutable';
import {IAction, IActionGeneric, IDispatch} from 'redux';
import {createAction} from 'redux-actions';
import {NavigationAction} from './constant';
import {NavigationState, IRecord} from '../../models/navigation';

export function switchTab(index: number): IActionGeneric<number> {
    return {
        type: NavigationAction.SWITCH_TAB,
        payload: index
    };
}

export function pushRoute(state: IRecord<NavigationState>) {
    return (dispatch: IDispatch) => {
        if (!isNavigationAnimationInProgress(state)) {
            dispatch.bind(null, {
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

function isNavigationAnimationInProgress(state: IRecord<NavigationState>) {
    return state.getIn(['isNavigating']);
}