import React from "react";
import { Provider } from "react-redux";
import App from "./Pages/App";
import store from "./Store";

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
