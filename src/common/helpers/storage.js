import store from 'react-native-simple-store';

export const setStorage = (key, value) => {
    store.save(key, value);
};

export const getStorage = (key) => {
    store.get(key);
};

'use strict';
import { AsyncStorage } from 'react-native';
// import { API_TOKEN } from './../constants/config';

export const setUserToken = (token) => {
  forgetItem('token');
  AsyncStorage.setItem('token', token, (err)=> {
    if (err) {
      throw err;
    }
  });
};

export const getUserToken = () => {
  return AsyncStorage.getItem('token');
};

export const forgetItem = (key)=> {
  AsyncStorage.removeItem(key);
};
