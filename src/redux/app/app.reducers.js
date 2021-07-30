import { actionTypes } from "../actionTypes";

const initialState = {
  modalStatus: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        modalStatus: !state.modalStatus,
      };

    default:
      return state;
  }
};

export default cartReducer;
