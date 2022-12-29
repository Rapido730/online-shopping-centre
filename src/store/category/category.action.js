import { createAction } from "../../utils/reducer/reducer.utils";
import { Category_Action_Types } from "./category.types";

export const SetCategories = (categoriesArray) =>
  createAction(Category_Action_Types.SetCategories, categoriesArray);
