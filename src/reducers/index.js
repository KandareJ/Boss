import { combineReducers } from 'redux';

import { ADD_PROGRAM, NEW_PROFILE, ADD_ITEM } from '../actions';

export const programs = (last=[], action) => {
  if (action.type === ADD_PROGRAM) {
    return [...last, action.payload];
  }
  else return last;
}

export const diet_profile = (last=null, action) => {
  if (action.type === NEW_PROFILE) {
    return action.payload;
  }
  else return last;
};

export const items = (last=[], action) => {
  if (action.type === ADD_ITEM) {
    return [...last, action.payload];
  }
  else return last;
}

export default combineReducers({
  diet_profile,
  programs,
  items
});