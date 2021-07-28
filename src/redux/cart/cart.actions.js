import { actionTypes } from "../actionTypes";

export const addToCart = (dispatch) => {
  return dispatch({
    type: actionTypes.ADD_TO_CART,
  });
};

export const removeFromCart = (dispatch) => {
  return dispatch({
    type: actionTypes.REMOVE_FROM_CART,
  });
};
