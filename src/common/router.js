import React, {Component} from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import Auth from '../pages/auth/components';
import Signin from '../pages/auth/components/Signin';
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
    title: 'today',
    navigationOptions: {
      tabBar: {
        label: 'Today',
      },
    },
  },
});

export const AuthStack = StackNavigator({
  Signin: {
    screen: Signin,
    navigationOptions: {
      title: 'Sign In',
    },
  }
});


export const Root = StackNavigator({
  Auth: {
    screen: AuthStack,
  },
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});



        // icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />


/*const RouterComponent = () => (
    <Router sceneStyle={{paddingTop: 100}}>
        <Scene key="auth">
            <Scene key="Auth" component={Auth} title="Sign In" />
        </Scene>

        <Scene key="main">
            <Scene key="today" component={TodayScene} title="Sign In" initial={true} />
        </Scene>
    </Router>
);*/

// export default RouterComponent;