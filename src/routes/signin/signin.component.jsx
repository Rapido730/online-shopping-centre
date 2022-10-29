import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.util";

const SignIn = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      if(response){
        const userDocRef = createUserDocumentFromAuth(response.user);
      }
    };
    fetchData();
  }, []);

  const logGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUserPopup}> Sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        {" "}
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
