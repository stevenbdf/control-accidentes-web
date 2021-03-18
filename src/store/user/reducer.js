import * as types from '../types';

const initialState = {
  user: {},
  users: [],
  isLoading: false,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
