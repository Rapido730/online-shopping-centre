import Home from "./routes/home/home.component";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SetCurrentUser } from "./store/user/user.action";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.util";

import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Auth from "./routes/authentication/auth.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import CartCheckout from "./routes/cart-checkout/cart-checkout.component";

const App = () => {
  const dispatch = useDispatch(); // value never changes

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      // invoke this when the function is mounted
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      dispatch(SetCurrentUser(user));
      // //console.log(CurrentUser)
      // //console.log(user);
      // it will return a unsubsribe function which will shutdown this listner
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />}></Route>
          <Route path="signin" element={<Auth />} />
          <Route path="cartcheckout" element={<CartCheckout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
