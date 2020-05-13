import React, { Component } from "react";
// import "./CA.css";
// import { Link, Redirect } from "react-router-dom";

class CreateAccount extends Component {
 state = {
   username: "",
   email: "",
   password: "",
 }

//  handleChange = (event) => {
//    const {email, value } = event.target;
//    this.setState({
//      [email]: value,
//    })
//  }



// handleSubmit = (event) => {
//   event.preventDefault();
//   axios
//     .put(`/api/user/${this.props.match.params.id}`, {
//       username: this.state.username,
//       email: this.state.email,
//       password: this.state.password,
      
//     })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

    
//   };

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col">
          <h1>Create account info</h1>
        </div>
      </div>
      <div className="row">
        <form
          className="col s12"
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <input
            id="username"
            label="Username"
            type="text"
            name="username"
            value={this.state.username}
            handleChange={this.handleChange}
          />
          <br/>
          <input
            id="email"
            label="Email"
            type="text"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />
           <input
            id="password"
            label="Password"
            type="text"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
        
           
          <button text="Submit"></button>
        </form>
      </div>
    </div>
    )
  }
}


  

export default CreateAccount;
