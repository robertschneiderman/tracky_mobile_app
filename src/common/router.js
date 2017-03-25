import React, {Component} from 'react';
import { Scene, Router } from 'react-native-router-flux';
import App from './App';
import SigninScene from '../pages/auth/components/SigninScene';
import TodayScene from '../pages/today/components/';

const RouterComponent = () => (
    <Router sceneStyle={{paddingTop: 100}}>
        <Scene key="auth">
            <Scene key="signin" component={SigninScene} title="Sign In" />
        </Scene>

        <Scene key="main">
            <Scene key="today" component={TodayScene} title="Sign In" initial={true} />
        </Scene>
    </Router>
);

export default RouterComponent;