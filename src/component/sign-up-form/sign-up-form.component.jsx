import { useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import Button from "../button/button.component";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [FormField, SetFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = FormField;

  //   console.log(FormField);
  const resetFormField = () => {
    SetFormField(defaultFormField);
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );
      // console.log(user);

      const userDetails = await createUserDocumentFromAuth(user, {
        displayName,
      });
      console.log(userDetails);
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use!");
      } else {
        console.log("user creation encountered an error ", error.code);
      }
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    SetFormField({ ...FormField, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={SubmitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          onChange={changeHandler}
          value={displayName}
        />
        <FormInput
          label="Email"
          type={"email"}
          required
          name="email"
          onChange={changeHandler}
          value={email}
        />

        <FormInput
          label="Password"
          type={"password"}
          required
          name="password"
          onChange={changeHandler}
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type={"password"}
          required
          name="confirmPassword"
          onChange={changeHandler}
          value={confirmPassword}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
