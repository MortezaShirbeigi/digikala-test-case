import { setItemLocalStorage } from "../../utilities";
import { actionTypes } from "../actionTypes";
import { constant } from "../../utilities/constant";

const initialState = {
  cartItems: 0,
  cartProducts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const dataAfterAddProduct = {
        ...state,
        cartItems: state.cartItems + 1,
        cartProducts: [...state.cartProducts, { ...action.data, count: 1 }],
      };

      // add to local storage
      setItemLocalStorage(
        constant.localStorageName,
        JSON.stringify(dataAfterAddProduct)
      );

      return {
        ...dataAfterAddProduct,
      };

    case actionTypes.INCREASE_QUANTITY:
      // find index of product
      const increaseIndex = state.cartProducts.findIndex(
        (product) => product.id === action.id
      );

      // create copy of state for increase count
      const newProducts = [...state.cartProducts];
      newProducts[increaseIndex].count = newProducts[increaseIndex].count + 1;
      const dataAfterIncreaseQuantity = {
        ...state,
        cartItems: state.cartItems + 1,
        cartProducts: newProducts,
      };

      // add to local storage
      setItemLocalStorage(
        constant.localStorageName,
        JSON.stringify(dataAfterIncreaseQuantity)
      );

      return {
        ...dataAfterIncreaseQuantity,
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

      const dataAfterDecreaseQuantity = {
        ...state,
        cartItems: state.cartItems - 1,
        cartProducts: newProductsList,
      };

      // add to local storage
      setItemLocalStorage(
        constant.localStorageName,
        JSON.stringify(dataAfterDecreaseQuantity)
      );

      return {
        ...dataAfterDecreaseQuantity,
      };

    case actionTypes.CLEAR_CART:
      const dataAfterClearCart = {
        ...state,
        cartItems: 0,
        cartProducts: [],
      };

      // clear products from local storage
      setItemLocalStorage(
        constant.localStorageName,
        JSON.stringify(dataAfterClearCart)
      );

      return {
        ...dataAfterClearCart,
      };

    case actionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        cartItems: action.data.cartItems,
        cartProducts: action.data.cartProducts,
      };

    default:
      return state;
  }
};

export default cartReducer;
