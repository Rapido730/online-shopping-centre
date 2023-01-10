import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartOpenStatus = createSelector(
  [selectCartReducer],
  (cart) => cart.IsCartOpen
);

export const selectCartQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0)
);

export const selectCartPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (price, cartItem) => price + cartItem.quantity * cartItem.price,
    0
  )
);
