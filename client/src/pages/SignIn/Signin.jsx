import React, { Component } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";

class Signin extends Component {
  render() {
    return (
      <div>
        <h3>Username</h3>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <br/>
        <br/>
        <h3>Password</h3>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      
      </div>
    );
  }
}

export default Signin;
