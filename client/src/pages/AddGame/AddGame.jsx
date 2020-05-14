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
    const platforms = this.filterPlatforms(rawGame.platforms);
    const newGame = {
      name: rawGame.name,
      platform: platforms,
      imgURL: rawGame.background_image
    }
    return newGame;
  }

  filterPlatforms = (platforms) =>{
    let platformArray = [];
    for(var i = 0; i < platforms.length; i++){
      switch (platforms[i].platform.name){
        case "PC":
        case "Linux":
        case "macOS":
          if(!platformArray.includes("PC")){platformArray.push("PC")};
          break;
        case "PlayStation 4":
        case "PlayStation 3":
        case "PlayStation 2":
        case "PlayStation":
          if(!platformArray.includes("PlayStation")){platformArray.push("PlayStation")};
          break;
        case "Xbox One":
        case "Xbox 360":
        case "Xbox":
          if(!platformArray.includes("Xbox")){platformArray.push("Xbox")};
          break;
        case "Nintendo Switch":
          if(!platformArray.includes("Nintendo Switch")){platformArray.push("Nintendo Switch")};
          break;
        default:
          break;
      }
    }
    return platformArray
  }

  saveGame = (game) => {
    let gameId;
    axios.get(`/api/game?name=${game.name}&platform=${game.platform}`).then((gameExists)=>{
      if(!gameExists.data){
        axios.post("/api/game", game).then(()=>console.log("succes")).catch(er=>console.log(er));
      }else{
        gameId = gameExists.data.id;
      }
    })
    //axios.post("/api/usergame", {gameId, userId}).then(()=>console.log("game saved")).catch(er=>console.log(er));
    //need a way to get the signed in user's id 
    //need to assign game id if game is just being created in database
    //probably need to async await in the end to avoid .then hell
  }

  render() {
    return (
      <div className="container center">
        <h3>Add a new game to your profile?</h3>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col offset-s4 s4">
              <input
                placeholder="Search"
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
                Find Game<i className="material-icons right">search</i>
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
          return <GameCard imgURL={imgURL} name={name} platform={platform} saveGame={this.saveGame}/>
        })
          }
      </div>
    );
  }
}

export default AddGame;
