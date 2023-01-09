// import { useSelector } from "react-redux";
import { createAction } from "../../utils/reducer/reducer.utils";
import { Cart_Action_Types } from "./cart.types";

export const CartStateToggle = (SetCartOpen) => {
  return createAction(Cart_Action_Types.CartToggle, SetCartOpen);
};

export const UpdateCartItemReducer = (newCartItems) => {
  const newCartQuantity = newCartItems.reduce(
    (count, cartItem) => count + cartItem.quantity,
    0
  );
  const newCartPrice = newCartItems.reduce(
    (price, cartItem) => price + cartItem.quantity * cartItem.price,
    0
  );

  return createAction(Cart_Action_Types.SetCartItems, {
    cartItems: newCartItems,
    TotalCartPrice: newCartPrice,
    TotalCartQuantity: newCartQuantity,
  });
};

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

// const cartItems = useSelector((state)=>state.cart.cartItems);
export const addItemToCart = (ProductToAdd, cartItems) => {
  const newCartItems = AddInCart(ProductToAdd, cartItems);
  return UpdateCartItemReducer(newCartItems);
};

export const removeItemFromCart = (ProductToRemove, cartItems) => {
  const newCartItems = cartItems.filter(
    (cartItem) => !(cartItem.id === ProductToRemove.id)
  );

  return UpdateCartItemReducer(newCartItems);
};

export const decreaseItemQuantity = (Product, cartItems) => {
  const newCartItems = cartItems
    .filter(
      (cartItem) => !(cartItem.quantity === 1 && cartItem.id === Product.id)
    )
    .map((cartItem) =>
      cartItem.id === Product.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  return UpdateCartItemReducer(newCartItems);
};
