import { Category_Action_Types } from "./category.types";

const INITIAL_STATE = {
  Categories:[]
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Category_Action_Types.SetCategories:
      return {...state,Categories:payload}
    default:
      return { ...state };
  }
};
