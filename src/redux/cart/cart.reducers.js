import { actionTypes } from "../actionTypes";

const initialState = {
  cartItems: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems + 1,
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems > 0 ? state.cartItems - 1 : 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
