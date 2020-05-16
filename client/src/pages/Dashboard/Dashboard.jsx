import React, { Component } from "react";
import FriendList from "../../components/friendHandler/friendList";
import axios from "axios";

class Dashboard extends Component {
  state = {
    friendResults: [],
    searchGame: "",
    searchName: "",
  };

  componentDidMount() {
    axios
      .get(`/api/friend/findAll`)
      .then((response) => {
        console.log(response.data);
        this.setState({ friendResults: response.data });
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitName = (event) => {
    event.preventDefault();
  };
  handleSubmitGame = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="container center">
        <h4 id="FFheadText">Dashboard</h4>
        <br />
        <div className="row">
          <h5 id="FFheadText">Search your friends list!</h5>
          <form className="col s3 offset-s1">
            <div className="row">
              <div className="input-field">
                <input
                  id="search_by_name"
                  type="text"
                  onChange={this.handleChange}
                />
                <label for="search_by_name">Search By Name</label>
                <button
                  className="btn waves-effect waves-light"
                  id="ButtonColor"
                  type="submit"
                  name="action"
                >
                  Search
                  <i className="material-icons right">search</i>
                </button>
              </div>
            </div>
          </form>
          <form className=" col s3 offset-s4">
            <div className="row">
              <div class="input-field">
                <textarea
                  id="search_by_game"
                  class="materialize-textarea"
                ></textarea>
                <label for="search_by_game">Search By Game</label>
                <button
                  className="btn waves-effect waves-light"
                  id="ButtonColor"
                  type="submit"
                  name="action"
                  onChange={this.handleChange}
                >
                  Search
                  <i className="material-icons right">search</i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <table className="centered highlight bordered">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Discord Name</th>
            </tr>
          </thead>
          <FriendList friendResults={this.state.friendResults} />
        </table>
        <a
          className="waves-effect waves-light btn"
          href="/addgame"
          id="ButtonColor"
        >
          <i class="material-icons left">videogame_asset</i>Add a new game?
        </a>
      </div>
    );
  }
}

export default Dashboard;
