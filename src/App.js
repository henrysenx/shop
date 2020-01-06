import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
