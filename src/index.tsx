import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./Components/Elements/ErrorBoundary/index";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Helpers/ScrollToTop";

import { Provider } from "react-redux";
import store from "./Store/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
