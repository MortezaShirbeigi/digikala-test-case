import { actionTypes } from "../actionTypes";

const initialState = {
  cartItems: 0,
  cartProducts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems + 1,
        cartProducts: [...state.cartProducts, { ...action.data, count: 1 }],
      };

    case actionTypes.INCREASE_QUANTITY:
      // find index of product
      const increaseIndex = state.cartProducts.findIndex(
        (product) => product.id === action.id
      );

      // create copy of state for increase count
      const newProducts = [...state.cartProducts];
      newProducts[increaseIndex].count = newProducts[increaseIndex].count + 1;

      return {
        ...state,
        cartItems: state.cartItems + 1,
        cartProducts: newProducts,
      };

    case actionTypes.DECREASE_QUANTITY:
      // find index of product
      const decreaseIndex = state.cartProducts.findIndex(
        (product) => product.id === action.id
      );

      // create copy of state for increase count
      const newProductsList = [...state.cartProducts];
      newProductsList[decreaseIndex].count === 1
        ? newProductsList.splice(decreaseIndex, 1)
        : (newProductsList[decreaseIndex].count =
            newProductsList[decreaseIndex].count - 1);
      return {
        ...state,
        cartItems: state.cartItems - 1,
        cartProducts: newProductsList,
      };

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: 0,
        cartProducts: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
