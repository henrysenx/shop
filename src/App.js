import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignIn from "./components/sign-in/sign-in";
import "./App.css";
import { auth } from "./firebase/firebase.util";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signIn" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
