export const ADD_PROGRAM = 'ADD_PROGRAM';
export const NEW_PROFILE = 'NEW_PROFILE';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_WATER = 'ADD_WATER';
export const SET_ITEMS = 'SET_ITEMS';
export const SET_WATER = 'SET_WATER';

export const add_program = (program) => {
  return {
    type: ADD_PROGRAM,
    payload: program
  };
};

export const new_profile = (profile) => {
  return {
    type: NEW_PROFILE,
    payload: profile
  };
};

export const add_item = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const set_items = (items) => {
  return {
    type: SET_ITEMS,
    payload: items
  }
}

export const add_water = (water) => {
  return {
    type: ADD_WATER,
    payload: water
  }
}

export const set_water = (water) => {
  return {
    type: SET_WATER,
    payload: water
  }
}
