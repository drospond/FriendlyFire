import React, { Component } from "react";
import axios from "axios";
import GameCard from "../../components/GameCard/GameCard"

class AddGame extends Component {
  state = {
    gameResults: [],
    search: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const search = this.state.search;
      axios.get(`https://api.rawg.io/api/games?search=${search}`).then((res)=>{
        const gameArray = res.data.results.map((rawGame)=>{
          return this.createGameObj(rawGame);
        })
        this.setState({gameResults: gameArray});
      });
  }

  createGameObj = (rawGame) => {
    const newGame = {
      name: rawGame.name,
      platform: rawGame.platforms,
      imgURL: rawGame.background_image
    }
    return newGame;
  }

  render() {
    return (
      <div className="container center">
        <h3>Add a new game to your profile?</h3>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col offset-s4 s4">
              <input
                placeholder="Doom"
                id="add_a_game"
                type="text"
                name="search"
                onChange={this.handleChange}
              />
              <label for="add_a_game">Search Game here</label>
              <button
                className="btn waves-effect waves-light"
                id="ButtonColor"
                type="submit"
                name="action"
              >
                Add Game<i className="material-icons right">search</i>
              </button>
            </div>
          </div>
        </form>
        <a
          className="waves-effect waves-light btn"
          href="/dashboard"
          id="ButtonColor"
        >
          <i className="material-icons left">arrow_back</i>Back to the dashboard
        </a>
        {this.state.gameResults.map(({genre, imgURL, name, platform})=>{
          return <GameCard imgURL={imgURL} name={name} platform={platform}/>
        })
          }
        {/* <table className="centered highlight bordered">
        <thead>
          <tr>
              <th>Name</th>
              <th>Console</th>
              <th>Genre</th> 
          </tr>
        </thead>
        <tbody>
            <tr>
            <td>Call Of Duty: Modern Warfare</td>
            <td>PC</td>
            <td>First-Person Shooter</td> 
            <a class="btn-floating btn-large waves-effect waves-light" id="removeFriends"><i class="material-icons">delete_forever</i></a>
            </tr>
        </tbody>
        </table> */}
      </div>
    );
  }
}

export default AddGame;
