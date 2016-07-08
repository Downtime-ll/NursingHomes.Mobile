/// <reference path="../../typings/index.d.ts" />

import * as Immutable from 'immutable';
export interface Session {
    isReady: boolean;
}

const defaultSession: Session = {
    isReady: false
};

export const SessionRecord = Immutable.Record<Session>(defaultSession, "Session");