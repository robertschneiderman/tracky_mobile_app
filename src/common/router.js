import React, {Component} from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SigninScene from '../pages/auth/components/SigninScene';

const RouterComponent = () => (
    <Router>
        <Scene key="signin" component={SigninScene} title="Sign In" />
    </Router>
);

export default RouterComponent;