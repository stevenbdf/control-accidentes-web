import * as types from '../types';

const initialState = {
  files: [],
  isLoading: false,
};

export const files = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILES_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.SET_FILES:
      return {
        ...state,
        files: action.payload,
      };
    default:
      return state;
  }
};
