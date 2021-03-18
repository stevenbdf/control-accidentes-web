import * as types from '../types';

export const setUserLoading = () => async (dispatch) => {
  dispatch({
    type: types.SET_USER_LOADING,
    payload: true,
  });
};