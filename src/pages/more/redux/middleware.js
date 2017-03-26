// More API Util
import { 
       } from './api_util';
// More Action
import { 
// More Constants
       } from './actions';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    default:
      return next(action);
  }
};