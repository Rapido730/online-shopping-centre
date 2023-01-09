import { combineReducers } from "redux";

import { UserReducer } from "./user/user.reducer";
import { categoryReducer } from "./category/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  category: categoryReducer,
  cart: cartReducer,
});
