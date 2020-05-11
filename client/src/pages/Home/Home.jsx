import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1> Welcome to FriendlyFire! </h1>
        <h2>Find new friends to game with</h2>
        <br />
        <h3>Sign in</h3>
        <button>submit</button>
        <br />
        <h3>Create Account</h3>
        <button>submit</button>
      </div>
    );
  }
}

export default Home;
