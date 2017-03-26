import axios from 'axios';
import { setStorage, getStorage, removeStorage } from '../../../common/helpers/storage';
// import { Actions } from 'react-native-router-flux';
// import { NavigationActions } from 'react-navigation';
// import { createHistory } from '../../../data/history/api_util';

// const ROOT_URL = (process.env.NODE_ENV !== "production") ? 'http://localhost:3090' : 'https://trackyy.herokuapp.com';
const ROOT_URL = 'http://localhost:3090';

function signIn(dispatch, user) {
    // debugger;
    dispatch({ type: 'REQUEST_USER', id: user.id });
    dispatch({ type: 'AUTH_USER', payload: user });
}

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        setStorage('token', response.data.token);
        setStorage('currentUser', response.data.user.id);
        
        signIn(dispatch, response.data);
      })
      .catch(() => {
        dispatch(authError("Bad Login Info"));
      });
  };
}

export function signinUserByToken() {
  return function (dispatch) {
    return getStorage('token').then(token => {
      if (token) {
        axios.post(`${ROOT_URL}/users/token/`, {token}).then(response => {
          signIn(dispatch, response.data);        
        }).catch(e => {
          console.log(e);
        });
      }
    });

  };
}

export function signupUser({ email, name, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, name, password})
      .then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('currentUser', response.data.id);        
        // createHistory(response.data.id, 
        //   res => {
        //     dispatch({ type: 'AUTH_USER' });
        //     hashHistory.push('dashboard');
        //   }, err => console.log(err)
        // );
      })
      .catch(() => {
        dispatch(authError("Bad Signup Info"));
      });
      // .catch(response => dispatch(authError(response.data.error)))
  };
}

export function authError(error) {
  return {
    type: 'AUTH_ERROR',
    payload: error
  };
}

export function signoutUser() {
  removeStorage('token');
  removeStorage('currentUser');
  return function(dispatch) {
    dispatch({ type: "SIGNOUT" });
    dispatch({ type: 'UNAUTH_USER' });
  };
}