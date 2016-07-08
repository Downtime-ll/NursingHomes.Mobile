/// <reference path="../../typings/index.d.ts" />

import * as Immutable from 'immutable';
import {Session, SessionRecord} from './session';
import {NavigationState, NavigationStateRecord} from './navigation';

export type IRecord<T> = Immutable.Record.IRecord<T>

export interface AppState {
  session: IRecord<Session>;
  navigation: IRecord<NavigationState>;
}

const defaultAppState: AppState = {
  session: new SessionRecord(),
  navigation: new NavigationStateRecord()
};

export const AppRecord = Immutable.Record<AppState>(defaultAppState, "App");