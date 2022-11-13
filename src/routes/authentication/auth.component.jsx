import SigninForm from "../../component/sign-in-form/sign-in-form.component";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";

import "./auth.styles.scss"

const Auth = () => {
  return (
    <div className="Auth-Container">
      <SigninForm className="auth-box"/>
      <SignUpForm className="auth-box" />
    </div>
  );
};

export default Auth;
