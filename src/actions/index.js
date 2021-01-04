export const ADD_PROGRAM = 'ADD_PROGRAM';
export const NEW_PROFILE = 'NEW_PROFILE';
export const ADD_ITEM = 'ADD_ITEM';

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
