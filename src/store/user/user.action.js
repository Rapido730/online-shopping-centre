import { createAction } from "../../utils/reducer/reducer.utils"
import { User_Action_Types } from "./user.types.js";

export const SetCurrentUser = (user) =>
  createAction(User_Action_Types.Set_current_user, user); 