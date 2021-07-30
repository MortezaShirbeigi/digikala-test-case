import { actionTypes } from "../actionTypes";

export const addToCart = (data) => {
  return { type: actionTypes.ADD_TO_CART, data };
};

export const increaseQuantity = (id) => {
  return { type: actionTypes.INCREASE_QUANTITY, id };
};

export const decreaseQuantity = (id) => {
  return { type: actionTypes.DECREASE_QUANTITY, id };
};

export const clearCart = () => {
  return { type: actionTypes.CLEAR_CART };
};

export const loadProducts = (data) => {
  return { type: actionTypes.LOAD_PRODUCTS, data };
};
