var React = require('React');
import { Scene, Modal, Actions } from 'react-native-router-flux';
import SigninScene from '../pages/auth/components/SigninScene';

export const scenes = Actions.create(
    <Scene key="root">
        <Scene key="auth">
            <Scene key="signin" component={SigninScene} title="Sign In" />
        </Scene>

        <Scene key="main">
            <Scene key="today" component={TodayScene} title="Today" initial={true} />
        </Scene>
    </Scene>
);