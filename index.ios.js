import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/common/store';
import App from './src/common/App';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('tracky_mobile_app', () => Root);