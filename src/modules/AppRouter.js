/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import CounterViewContainer from './counter/CounterViewContainer';
// import ProfileViewContainer from './profile/ProfileViewContainer';
import LoginViewContainer from './auth/login';

export default function AppRouter(props: any) {
  const onNavigate = props.onNavigate;
  const key = props.scene.route.key;

  if (key === 'Counter') {
    return <CounterViewContainer onNavigate={onNavigate} />;
  }

  if (key === 'Profile') {
    return <LoginViewContainer />;
  }

  if (key === 'login') {
    return <LoginViewContainer />;
  }

  throw new Error('Unknown navigation key: ' + key);
}
