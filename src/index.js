import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import ErrorBoundry from "./components/error-boundry";
import BookStoreService from "./services/book-store-service";
import store from "./store";
import { BookServiceProvider } from "./components/book-service-context";
import App from "./components/app";

const bookStoreService = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookServiceProvider value={bookStoreService}>
        <Router>
          <App />
        </Router>
      </BookServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
