var React = require('React');
import { Scene, Modal, Actions } from 'react-native-router-flux';
import SigninScene from '../pages/auth/components/SigninScene';

export const scenes = Actions.create(
    <Scene key="signin" component={SigninScene} />
);