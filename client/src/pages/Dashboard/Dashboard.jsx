import React, { Component } from "react";
import FriendList from "../../components/friendHandler/friendList";
import axios from "axios";

class Dashboard extends Component {
  state = {
    friendResults: [],
    searchGame: "",
    searchName: "",
    searchBy: "",
    id: ""
  };

  componentDidMount() {
    axios
      .get(`/api/friend/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ friendResults: response.data });
        this.setState({id: response.data.id})
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
    const searchName = this.state.searchName;
    axios
      .get(`/api/friend/find?name=${searchName}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ friendResults: [response.data] });
        this.setState({searchBy: " by Name"})
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };
  handleSubmitGame = (event) => {
    event.preventDefault();
    const searchGame = this.state.searchGame;
    axios
      .get(`/api/friend/find?game=${searchGame}`)
      .then((response) => {
        console.log(response.data.results);
        this.setState({ friendResults: [response.data] });
        this.setState({searchBy: " by Game"})
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };

  render() {
    return (
      <div className="container center">
        <h4 id="FFheadText">Dashboard</h4>
        <br />
        <div className="row">
          <h5 id="FFheadText">Search your friends list{this.state.searchBy}!</h5>
          <form className="col s3 offset-s1" onSubmit={this.handleSubmitName}>
            <div className="row">
              <div className="input-field">
                <input
                  id="search_by_name"
                  type="text"
                  name="searchName"
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
          <form className=" col s3 offset-s4" onSubmit={this.handleSubmitGame}>
            <div className="row">
              <div className="input-field">
                <textarea
                  id="search_by_game"
                  className="materialize-textarea"
                  name="searchGame"
                  onChange={this.handleChange}
                ></textarea>
                <label for="search_by_game">Search By Game</label>
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
        </div>
        <table className="centered highlight bordered">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Discord Name</th>
            </tr>
          </thead>
          <FriendList friendResults={this.state.friendResults} saveButton={false}/>
        </table>
      </div>
    );
  }
}

export default Dashboard;
