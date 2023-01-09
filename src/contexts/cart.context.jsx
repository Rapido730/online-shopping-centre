import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  IsCartOpen: null,
  SetCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  TotalCartQuantity: 0,
  decreaseItemQuantity: () => null,
  TotalCartPrice: 0,
});

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

const Cart_action_types = {
  SetCartOpen: "SetCartOpen",
  SetcartItems: "SetcartItems",
  // SetTotalCartQuantity: "SetTotalCartQuantity",
  // SetTotalCartPrice: "SetTotalCartPrice",
};

const CartReducer = (state, action) => {
  //console.log("dispatched");
  const { type, payload } = action;
  //console.log(type);

  switch (type) {
    case Cart_action_types.SetCartOpen:
      return {
        ...state,
        IsCartOpen: payload,
      };
    case Cart_action_types.SetcartItems:
      return {
        ...state,
        ...payload,
      };
    default: {
      throw new Error(`Unhandled type ${type} in CartReducer`);
    }
  }
};

const INITIAL_STATE = {
  IsCartOpen: false,
  cartItems: [],
  TotalCartQuantity: 0,
  TotalCartPrice: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

  const { IsCartOpen, cartItems, TotalCartQuantity, TotalCartPrice } = state;
  const SetCartOpen = () => {
    dispatch({ type: Cart_action_types.SetCartOpen, payload: !IsCartOpen });
  };

  const UpdateCartItemReducer = (newCartItems) => {
    const newCartQuantity = newCartItems.reduce(
      (count, cartItem) => count + cartItem.quantity,
      0
    );
    const newCartPrice = newCartItems.reduce(
      (price, cartItem) => price + cartItem.quantity * cartItem.price,
      0
    );

    dispatch({
      type: Cart_action_types.SetcartItems,
      payload: {
        cartItems: newCartItems,
        TotalCartPrice: newCartPrice,
        TotalCartQuantity: newCartQuantity,
      },
    });
  };

  const addItemToCart = (ProductToAdd) => {
    const newCartItems = AddInCart(ProductToAdd, cartItems);
    UpdateCartItemReducer(newCartItems);
  };

  const removeItemFromCart = (ProductToRemove) => {
    const newCartItems = cartItems.filter(
      (cartItem) => !(cartItem.id === ProductToRemove.id)
    );

    UpdateCartItemReducer(newCartItems);
  };

  const decreaseItemQuantity = (Product) => {
    const newCartItems = cartItems
      .filter(
        (cartItem) => !(cartItem.quantity === 1 && cartItem.id === Product.id)
      )
      .map((cartItem) =>
        cartItem.id === Product.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    UpdateCartItemReducer(newCartItems);
  };

  const value = {
    IsCartOpen,
    SetCartOpen,
    cartItems,
    addItemToCart,
    TotalCartQuantity,
    decreaseItemQuantity,
    removeItemFromCart,
    TotalCartPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
