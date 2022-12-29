import {createAction} from "../../utils/reducer/reducer.utils"
import { Category_Action_Types } from "./category.types"

export const SetCategoryMap = (categoryMap)=> createAction(Category_Action_Types.SetCategoryMap,categoryMap);