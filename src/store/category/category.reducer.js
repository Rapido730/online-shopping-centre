import { Category_Action_Types } from "./category.types";

const INITIAL_STATE = {
  CategoryMap: {},
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Category_Action_Types.SetCategoryMap:
      return { ...state, CategoryMap: payload };

    default:
      return { ...state };
  }
};
