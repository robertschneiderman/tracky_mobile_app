import React, {Component} from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SigninScene from '../pages/auth/components/SigninScene';
import TodayScene from '../pages/today/components/';

const RouterComponent = () => (
    <Router sceneStyle={{paddingTop: 100}}>
        <Scene key="signin" component={SigninScene} title="Sign In" />
        <Scene key="today" component={TodayScene} title="Sign In" />
    </Router>
);

export default RouterComponent;