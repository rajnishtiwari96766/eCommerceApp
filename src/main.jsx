import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "./context/prod_context.jsx";
import { FilterContextProvider } from "./context/filter_context.jsx";
import { CartContextProvider } from "./context/cart_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <FilterContextProvider>
      <CartContextProvider>
      <App />
      </CartContextProvider>
    </FilterContextProvider>
  </Provider>
);
