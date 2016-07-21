/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import CounterViewContainer from './modules/counter/CounterViewContainer';
// import ProfileViewContainer from './profile/ProfileViewContainer';
import LoginViewContainer from './modules/auth/login';
import AwesomeProject from './modules/imagetest/AwesomeProject';
import NurserList from './modules/nurser/nurserContainer';
import NurserInfo from './modules/nurser/nurserInfoContainer';
import ModelPage from './common/components/form/ModelPage';

export default function AppRouter(props: any,aaa) {
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

  if (key === 'NurserInfo') {
    return <NurserInfo />;
  }

  if (key === 'login') {
    return <LoginViewContainer />;
  }

  if (key === 'GiftedForm.ModalWidget') {
    return <ModelPage router= {props.scene.route.router} />;
  }

  throw new Error('Unknown navigation key: ' + key);
}
