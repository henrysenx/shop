import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignIn from "./components/sign-in/sign-in";
import SignUp from "./components/sign-up/sign-up";
import Authentication from "./pages/Authentication/Authentication";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
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
          <Route exact path="/auth" component={Authentication} />
          <Route exact path="/signUp" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
