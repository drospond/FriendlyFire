import React, { Component } from "react";
import "./CA.css";
import { Link } from "react-router-dom";
import axios from "axios";

class CreateAccount extends Component {
  state = {
    email: "",
    username: "",
    password: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/api/user/${this.props.match.params.id}`, {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container center">
        <h1 id="FFheadText"> Welcome to FriendlyFire! </h1>
        <br />
        <div className="row">
          <form className="col s12 center">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" />
                <label for="icon_prefix">Username</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" />
                <label for="icon_prefix">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">sms</i>
                <input id="icon_sms" type="password" />
                <label for="icon_">Password</label>
              </div>
            </div>
          </form>
          <div className="row">
            <button
              className="btn waves-effect waves-light"
              href="/about"
              id="ButtonColor"
              type="submit"
              name="action"
            >
              Next!
              <i className="material-icons right">send</i>
            </button>
          </div>
        
        </div>
      </div>
    );
  }
}

export default CreateAccount;
