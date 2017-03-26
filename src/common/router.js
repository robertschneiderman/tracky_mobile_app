import React, {Component} from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import SigninScene from '../pages/auth/components/SigninScene';
import Today from '../pages/today/components/';
// import Calendar from '../pages/calendar/components/';

import { TabNavigator, StackNavigator } from 'react-navigation';


//   Calendar: {
//     screen: Calendar,
//     navigationOptions: {
//       tabBar: {
//         label: 'Calendar',
//         icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
//       },
//     },
//   },
export const Tabs = TabNavigator({
  Today: {
    screen: Today,
    navigationOptions: {
      tabBar: {
        label: 'Today',
      },
    },
  },
});
        // icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />


/*const RouterComponent = () => (
    <Router sceneStyle={{paddingTop: 100}}>
        <Scene key="auth">
            <Scene key="signin" component={SigninScene} title="Sign In" />
        </Scene>

        <Scene key="main">
            <Scene key="today" component={TodayScene} title="Sign In" initial={true} />
        </Scene>
    </Router>
);*/

// export default RouterComponent;