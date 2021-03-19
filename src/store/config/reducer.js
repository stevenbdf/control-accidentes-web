import * as types from '../types';

const initialState = {
  config: {},
  isLoading: false,
};

export const config = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CONFIG_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.SET_CONFIG:
      return {
        ...state,
        config: action.payload,
      };
    default:
      return state;
  }
};
