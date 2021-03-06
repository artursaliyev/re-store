import React from "react";
import { Switch, Route } from "react-router-dom";
import "./app.css";

import { HomePage, CartPage } from "../pages";
import ShopHeader from "../shop-header";
import ShoppingCartTable from "../shopping-cart-table";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={200} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;
