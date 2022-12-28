import { useEffect, useReducer } from "react";
import { createContext } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.util";

export const UserContext = createContext({
  CurrentUser: null,
  SetCurrentUser: () => null,
});                             // this a context with default values;

const User_Action_Types ={
  Set_current_user:'set-current-user',
}

const UserReducer = (state,action) => {
  const {type,payload} = action;

  switch(type){
    case User_Action_Types.Set_current_user : 
      return {...state,CurrentUser:payload};
    default:
      throw new Error(`unhandled type ${type} in userReducer`);
  }

}

const INITIAL_STATE = {
  CurrentUser:null,
}

export const UserProvider = ({ children }) => {
  // const [CurrentUser, SetCurrentUser] = useState(null);
  const [state,dispatch] = useReducer(UserReducer,INITIAL_STATE); 

  const {CurrentUser} = state;

  const SetCurrentUser = (user) => {
    dispatch({ type: User_Action_Types.Set_current_user, payload: user });
  }

  const value = { CurrentUser, SetCurrentUser };

  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener(async(user)=>{                   // invoke this when the function is mounted
      if(user){
        await createUserDocumentFromAuth(user);
      }
      SetCurrentUser(user)  
      // console.log(CurrentUser)
      console.log(user)                                                     // it will return a unsubsribe function which will shutdown this listner
    })

    return unsubscribe;
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;  // here we have provided value to the members of UserContext
};
