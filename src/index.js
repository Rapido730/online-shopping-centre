// import 'react-devtools';

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import { CategoriesProvider } from "./contexts/categories.context";
// import { CartProvider } from "./contexts/cart.context";

import { Provider } from "react-redux";
import { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import { store } from "./store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(//console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
