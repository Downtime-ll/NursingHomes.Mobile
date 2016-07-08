/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import CounterViewContainer from './counter/CounterViewContainer';
import ProfileViewContainer from './profile/ProfileViewContainer';

export default function AppRouter(props: any) {
  const onNavigate = props.onNavigate;
  const key = props.scene.route.key;

  if (key === 'Counter') {
    return <CounterViewContainer onNavigate={onNavigate} />;
  }


  if (key === 'Profile') {
    return <ProfileViewContainer />;
  }


  throw new Error('Unknown navigation key: ' + key);
}