import { useEffect, useState } from "react";
import { createContext } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.util";

export const UserContext = createContext({
  CurrentUser: null,
  SetCurrentUser: () => null,
});                             // this a context with default values;


export const UserProvider = ({ children }) => {
  const [CurrentUser, SetCurrentUser] = useState(null);
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
