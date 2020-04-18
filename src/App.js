import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form.js";
import firebase from "firebase";
import firebaseConfig from "./config";
import { Button } from "reactstrap";

//firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }
  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  handleLogOut() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h2>ChatAPP Gapa-Sapa</h2>
          {!this.state.user ? (
            <Button
              size="lg"
              color="primary"
              className="app__button"
              onClick={this.handleSignIn.bind(this)}
            >
              Sign in
            </Button>
          ) : (
            <Button
              size="lg"
              color="primary"
              className="app__button"
              onClick={this.handleLogOut.bind(this)}
            >
              Logout
            </Button>
          )}
        </div>
        <div className="app__list">
          <Form user={this.state.user} />
        </div>
        {/* <ButtonToggle color="primary">primary</ButtonToggle>{" "} */}
      </div>
    );
  }
}
export default App;
