import { combineReducers } from "redux";

import { UserReducer } from "./user/user.reducer";
import { categoryReducer } from "./category/category.reducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  category:categoryReducer
});
