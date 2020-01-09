import { CartActionTypes } from "./cartTypes";
import { addItemToCart } from "./cartUtils";

const InitialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
