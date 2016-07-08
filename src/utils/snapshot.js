"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var react_native_1 = require('react-native');
var immutable_1 = require('immutable');
var STATE_STORAGE_KEY = 'KindlingAppState:Latest';
function resetSnapshot() {
    return __awaiter(this, void 0, void 0, function* () {
        var state = yield rehydrate();
        if (state) {
            return immutable_1.fromJS(state);
        }
        return null;
    });
}
exports.resetSnapshot = resetSnapshot;
function saveSnapshot(state) {
    return __awaiter(this, void 0, void 0, function* () {
        yield persist(state);
    });
}
exports.saveSnapshot = saveSnapshot;
function clearSnapshot() {
    return __awaiter(this, void 0, void 0, function* () {
        yield clear();
    });
}
exports.clearSnapshot = clearSnapshot;
function persist(state) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield react_native_1.AsyncStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state));
        }
        catch (e) {
            console.error('Error persisting application state', e);
        }
    });
}
function rehydrate() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var state = yield react_native_1.AsyncStorage.getItem(STATE_STORAGE_KEY);
            return state
                ? JSON.parse(state)
                : null;
        }
        catch (e) {
            console.error('Error reading persisted application state', e);
            return null;
        }
    });
}
function clear() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield react_native_1.AsyncStorage.removeItem(STATE_STORAGE_KEY);
        }
        catch (e) {
            console.error('Error clearing peristed application state', e);
        }
    });
}
