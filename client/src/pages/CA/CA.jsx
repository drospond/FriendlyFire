import React, { Component } from "react";
import "./CA.css";
import axios from "axios";
import jwt from "jsonwebtoken";

class CreateAccount extends Component {
  state = {
    email: "",
    handle: "",
    password: "",
    errorMessage: "",
    error: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    this.setState({
      error: "",
      errorMessage: ""
    })
  };

  pageChanger = (event) => {
    axios.get(`/api/user/handle/${this.state.handle}`)
    .then((response) => {
      axios
      .post("/api/auth", {
        email: this.state.email,
        password: this.state.password,
      })
      .then(async (response) => {
        console.log(response.data.data);
        if (response.data.success) {
          const decoded = await jwt.verify(
            response.data.data,
            process.env.REACT_APP_SECRET_KEY
          );
          console.log(decoded);
          await sessionStorage.setItem("jwt", response.data.data);
          await this.props.checkForToken();
          await this.props.history.push(`/account/${decoded.id}`);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
  } 

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("api/user", {
        email: this.state.email,
        handle: this.state.handle,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        this.pageChanger();
      })
      .catch((err,response) => {
        console.log(err);
        this.setState({
          error: true,
          errorMessage: err.response.data.message
        })
      });
  };

  render() {
    return (
      <div className="container center">
        <h1 id="FFheadText"> Welcome to FriendlyFire! </h1>
        <br />
        <div className="row">
        {this.state.error===true && <h5 className="error">{this.state.errorMessage}</h5>}
          <form className="col s12 center">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="icon_prefix"
                  type="text"
                  name="handle"
                  onChange={this.handleChange}
                />
                <label for="icon_prefix">Username</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="icon_prefix"
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                />
                <label for="icon_prefix">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">sms</i>
                <input
                  id="icon_sms"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
                <label for="icon_">Password</label>
              </div>
            </div>
          </form>
          <div className="row">
          <button
              class="btn waves-effect waves-light"
              type="submit"
              id="ButtonColor"
              name="action"
              onClick={this.handleSubmit}
            >
              Create Account
              <i class="material-icons right">save</i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
