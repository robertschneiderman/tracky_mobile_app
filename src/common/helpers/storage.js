// import store from 'react-native-simple-store';

// export const setStorage = (key, value) => {
//     store.save(key, value);
// };

// export const getStorage = (key) => {
//     store.get(key);
// };

'use strict';
import { AsyncStorage } from 'react-native';
// import { API_TOKEN } from './../constants/config';

export const setStorage = (key, val) => {
  removeStorage(key);
  AsyncStorage.setItem(key, val.toString(), (err)=> {
    if (err) {
      throw err;
    }
  });
};

export const getStorage = key => {
  return AsyncStorage.getItem(key);
};

export const removeStorage = key => {
  AsyncStorage.removeItem(key);
};
