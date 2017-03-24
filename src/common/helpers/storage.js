import store from 'react-native-simple-store';

export const setStorage = (key, value) => {
    store.save(key, value);
};

export const getStorage = (key) => {
    store.get(key);
};

export const storee = store;