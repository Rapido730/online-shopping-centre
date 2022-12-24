import { createContext, useEffect, useState } from "react";
// import data from "../shop-data.json"

export const CartContext = createContext({
  IsCartOpen: null,
  SetCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  TotalCartQuantity: 0,
  decreaseItemQuantity: () => null,
  TotalCartPrice: 0,
});

const AddInCart = (ProductToAdd, cartItems, SetcartItems) => {
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

export const CartProvider = ({ children }) => {
  const [IsCartOpen, SetCartOpen] = useState(false);
  const [cartItems, SetcartItems] = useState([]);
  const [TotalCartQuantity, SetTotalCartQuantity] = useState(0);
  const [TotalCartPrice, SetTotalCartPrice] = useState(0);

  const addItemToCart = (ProductToAdd) => {
    SetcartItems(AddInCart(ProductToAdd, cartItems, SetcartItems));
  };

  const removeItemFromCart = (ProductToRemove) => {
    SetcartItems(
      cartItems.filter((cartItem) => !(cartItem.id === ProductToRemove.id))
    );
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

    SetcartItems(newCartItems);
  };

  useEffect(() => {
    const newCartQuantity = cartItems.reduce(
      (count, cartItem) => count + cartItem.quantity,
      0
    );

    SetTotalCartQuantity(newCartQuantity);
  }, [cartItems]);

  useEffect(() => {
    const newCartPrice = cartItems.reduce(
      (price, cartItem) => price + cartItem.quantity * cartItem.price,
      0
    );

    SetTotalCartPrice(newCartPrice);
  }, [cartItems]);

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
