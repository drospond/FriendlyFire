import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container center">
        <h1> Welcome to FriendlyFire! </h1>
        <br />
<div className="row">
    <form className="col s12 center">
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate"/>
          <label for="icon_prefix">Username</label>
        </div>
        </div>
        <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">sms</i>
          <input id="icon_sms" type="password" className="validate"/>
          <label for="icon_">Password</label>
          </div>
        </div>
    </form>
  </div>
      </div>
    );
  }
}

export default Home;
