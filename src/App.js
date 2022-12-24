import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Auth from "./routes/authentication/auth.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import CartCheckout from "./routes/cart-checkout/cart-checkout.component";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<Auth />} />
          <Route path="cartcheckout" element={<CartCheckout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
