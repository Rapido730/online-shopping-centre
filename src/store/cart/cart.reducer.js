import { Cart_Action_Types } from "./cart.types";

const INITIAL_STATE = {
  IsCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Cart_Action_Types.CartToggle:
      return { ...state, IsCartOpen: payload };
    case Cart_Action_Types.SetCartItems:
      return { ...state, cartItems: payload };
    default:
      return state;
  }
};
