import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  SignInAuthUserWithEmailandPassword,
} from "../../utils/firebase/firebase.util";
const defaultFormValue = {
  email: "",
  password: "",
};

const SigninForm = () => {
  const [FormValue, SetFormValue] = useState(defaultFormValue);
  const { email, password } = FormValue;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    SetFormValue({ ...FormValue, [name]: value });
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { user } = await SignInAuthUserWithEmailandPassword(
        email,
        password
      );

      //   console.log(user);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Account doesn't exist.");
          break;
        case "auth/wrong-password":
          alert("Incorrect Password!");
          break;
        default:
          console.log(error);
      }
    }
  };

  // console.log(FormValue);

  const signInWithGoogle = async () => {
    // console.log("google");
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={SubmitHandler}>
        <FormInput
          label={"Email"}
          type="email"
          value={email}
          required
          name="email"
          onChange={changeHandler}
        />
        <FormInput
          label={"Password"}
          value={password}
          type="password"
          required
          name="password"
          onChange={changeHandler}
        />
        <div className="buttons-container">
          <Button type="submit"> Sign In </Button>

          <Button
            type="button"
            onClick={signInWithGoogle}
            button_type={"google"}
          >
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
