import { Cart_Action_Types } from "./cart.types";
const AddInCart = (ProductToAdd, cartItems) => {
  const exitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === ProductToAdd.id
  );

  if (exitingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === ProductToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...ProductToAdd, quantity: 1 }];
};

const INITIAL_STATE = {
  IsCartOpen: false,
  cartItems: [],
  TotalCartQuantity: 0,
  TotalCartPrice: 0,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Cart_Action_Types.CartToggle:
      return { ...state, IsCartOpen: payload };
    case Cart_Action_Types.SetCartItems:
      return {
        ...state,
        cartItems: payload.cartItems,
        TotalCartPrice: payload.TotalCartPrice,
        TotalCartQuantity: payload.TotalCartQuantity,
      };
    default:
      return state;
  }
};
