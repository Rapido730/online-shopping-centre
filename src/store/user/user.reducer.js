import { User_Action_Types } from "./user.types.js";

const INITIAL_STATE = {
  CurrentUser: null,
};

export const UserReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  //console.log("reducer");
  switch (type) {
    case User_Action_Types.Set_current_user:
      return { ...state, CurrentUser: payload };
    default:
      return state;
  }
};
