import React from 'react';
import { AppRegistry, Text } from 'react-native';
import Router from './src/router';

const App = () => (
  <Router />
);

AppRegistry.registerComponent('tracky_mobile_app', () => App);