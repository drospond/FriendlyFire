import React, { Component } from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import axios from "axios";

class AboutMe extends Component {
 state = {
   firstName: "",
   lastName: "",
   discord: "",
   games: "",

 }
 handleSubmit = (event) => {
  event.preventDefault();
  axios
    .put(`/api/user/${this.props.match.params.id}`, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      discord: this.state.discord,
      games: this.state.games,
      
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
render(){
  return(
    <div>
      something
    </div>
  )
}

}

export default AboutMe