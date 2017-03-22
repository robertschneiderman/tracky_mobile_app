import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/common/store';
import Router from './src/common/router';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

AppRegistry.registerComponent('tracky_mobile_app', () => App);