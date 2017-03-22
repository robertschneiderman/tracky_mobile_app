import React, {Component} from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SignIn from './auth/components/SingIn';

const RouterComponent = () => (
    <Router>
        <Scene key="login" component={SignIn} title="Login" />
    </Router>
);

export default RouterComponent;