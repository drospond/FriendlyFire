import React, { Component } from "react";
import "./CA.css";
import axios from "axios";

class CreateAccount extends Component {
  state = {
    email: "",
    handle: "",
    password: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  pageChanger = (event) => {
    axios.get(`/api/user/handle/${this.state.handle}`)
    .then((response) => {
      window.location.href=`/account/${response.data.id}`
     ;
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // TO-DO link page to dashboard via pageChange function
  // function pageChange(){
  //   window.location='about'
  // }
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // saveUser = (user) => {
  //   let userId;
  //   axios.get(`/api/game?name=${game.name}&platform=${game.platform}`).then((gameExists)=>{
  //     if(!gameExists.data){
  //       axios.post("/api/game", game).then(()=>console.log("succes")).catch(er=>console.log(er));
  //     }else{
  //       userId = userExists.data.id;
  //     }
  //   })
  //axios.post("/api/usergame", {gameId, userId}).then(()=>console.log("game saved")).catch(er=>console.log(er));
  //need a way to get the signed in user's id
  //need to assign game id if game is just being created in database
  //probably need to async await in the end to avoid .then hell

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
            <a
              className="btn waves-effect waves-light"
              id="ButtonColor"
              name="action"
              onClick={this.handleSubmit}
            >
              Done!
              <i className="material-icons right">send</i>
            </a>
          </div>
          <div className="row">
            <a
              className="btn waves-effect waves-light"
              id="ButtonColor"
              name="action"
              onClick={this.pageChanger}
            >
              Add Info
              <i className="material-icons right">send</i>
            </a>
          </div>
          
        </div>
      </div>
    );
  }
}

export default CreateAccount;
