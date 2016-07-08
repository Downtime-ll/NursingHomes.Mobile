/// <reference path="../../../typings/index.d.ts" />

import * as createLogger from 'redux-logger';
import * as Rn from 'react-native';

export default createLogger({
    collapsed: true,

    predicate: () => true,

    stateTransformer: state => state.toJs(),

    actionTransformer: action =>
        action && action.plyload && action.plyload.toJS ?
        Object.assign({}, action, {
            playload: action.payload.toJS()
        }) : action
});