/// <reference path="../../typings/index.d.ts" />

import * as Immutable from 'immutable';

export type IRecord<T> = Immutable.Record.IRecord<T>

export interface NavigationState {
    key: string;
    title: string;
    index: number;
    routes?: NavigationState[];
    isNavigating: boolean;
    iconName?: string;
}
export type NavigationStateList = Immutable.List<IRecord<NavigationState>>;

const defaultNavigationState: NavigationState =
    createNavigationState('MainNavigation', 'App', null, [
        createNavigationState('HomeTab', 'Home', 'ios-home', [createNavigationState('Counter', 'Counter')]),
        createNavigationState('ProfileTab', '我', 'ios-person', [createNavigationState('Profile', '我')])
    ]);


function createNavigationState(key: string, title: string, iconName?: string, routes?: NavigationState[]): NavigationState {
    return {
        key,
        title,
        iconName,
        index: 0,
        routes,
        isNavigating: false
    };
}

export const NavigationStateRecord = Immutable.Record<NavigationState>(defaultNavigationState, "NavigationState");