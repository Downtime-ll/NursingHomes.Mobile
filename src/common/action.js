import * as constants from './constant';

function requestUserPrefs() {
  return {
    type: constants.REQUEST_USERPREFS
  };
}

function responseUserPrefs(ret) {
  return {
    type: constants.RESPONSE_USERPREFS,
    ret,
    respondAt: Date.now()
  };
}

export function fetchUserPrefs() {
  return dispatch => {
    dispatch(requestUserPrefs());
    global.storage.getItem('userPrefs').then((ret) => {
      dispatch(responseUserPrefs(ret));
    });
  };
}

function startSaveUserPrefs() {
  return {
    type: constants.START_SAVEUSERPREFS
  };
}

function finishSaveUserPrefs(ret) {
  return {
    type: constants.FINISH_SAVEUSERPREFS,
    ret,
    finishAt: Date.now()
  };
}

export function saveUserPrefs(userPrefs) {
  return dispatch => {
    dispatch(startSaveUserPrefs());
    global.storage.setItem('userPrefs', userPrefs).then((err) => { // eslint-disable-line no-unused-vars
      dispatch(finishSaveUserPrefs(userPrefs));
    });
  };
}

function requestAuthentication() {
  return {
    type: constants.REQUEST_AUTHENTICATION
  };
}

function responseAuthentication(ret) {
  return {
    type: constants.RESPONSE_AUTHENTICATION,
    ret,
    respondAt: Date.now
  };
}

export function fetchAuthentication() {
  return dispatch => {
    dispatch(requestAuthentication());
    global.storage.getItem('user').then(ret => {
      dispatch(responseAuthentication(ret));
    });
  };
}

function startSaveAuthentication() {
  return {
    type: constants.START_SAVEAUTHENTICATION
  };
}

function finishSaveAuthentication(ret) {
  return {
    type: constants.FINISH_SAVEAUTHENTICATION,
    ret,
    finishAt: Date.now
  };
}

export function saveAuthentication(user) {
  return dispatch => {
    dispatch(startSaveAuthentication());
    global.storage.setItem('user', user).then(ret => { //eslint-disable-line no-unused-vars
      dispatch(finishSaveAuthentication(user));
    });
  };
}
