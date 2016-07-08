/// <reference path="../../typings/index.d.ts" />
import{
    applyMiddleware,
    createStore,
    compose
} from 'redux';
import middleware from './middleware';
import reducer from './reducer';
import {AppRecord} from '../models/AppState';

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default createStoreWithMiddleware(reducer, new AppRecord());