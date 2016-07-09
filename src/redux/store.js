
import {
    applyMiddleware,
    createStore
} from 'redux';
import middleware from './middleware';
import reducer,{defaultAppState} from './reducer';

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default createStoreWithMiddleware(reducer,defaultAppState);
