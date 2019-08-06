import React from "react";
import { Provider } from "react-redux";
import App from "./Pages/App";
import store from "./Store";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";
import Theme from "./Styles/Theme";

const Root = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <React.Fragment>
          <GlobalStyles />
          <App />
        </React.Fragment>
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
