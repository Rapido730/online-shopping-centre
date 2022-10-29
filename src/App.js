import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import SignIn from "./routes/signin/signin.component.jsx";

const Shop = () => {
  return <h1>Start Shopping</h1>;
};
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
