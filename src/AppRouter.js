/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import CounterViewContainer from './modules/counter/CounterViewContainer';
// import ProfileViewContainer from './profile/ProfileViewContainer';
import LoginViewContainer from './modules/auth/login';
import AwesomeProject from './modules/imagetest/AwesomeProject';
import NurserList from './modules/nurser/nurserContainer';

export default function AppRouter(props: any) {
  const onNavigate = props.onNavigate;
  const key = props.scene.route.key;

  if (key === 'Counter') {
    return <CounterViewContainer onNavigate={onNavigate} />;
  }

  if (key === 'Profile') {
    return <AwesomeProject />;
  }

  if (key === 'Nurser') {
    return <NurserList />;
  }

  if (key === 'login') {
    return <LoginViewContainer />;
  }

  throw new Error('Unknown navigation key: ' + key);
}
