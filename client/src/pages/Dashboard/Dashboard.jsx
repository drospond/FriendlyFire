import React, {Component} from 'react';
import FriendList from "../../components/friendHandler/friendList"
import axios from "axios"

class Dashboard extends Component {
  state ={
    friendResults: [],
    searchGame: "",
    searchName: "",
  }

  componentDidMount(){
    axios.get(`/api/friend/findAll`).then(response => {
    console.log(response.data)
    // this.setState({friendResults: [response.data]
    // })
  }).catch(err => {
    if(err){
        console.log(err)
    }})
}


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitName =(event) => {
    event.preventDefault();

  }
  handleSubmitGame =(event) => {
    event.preventDefault();

  }

    render(){
      return (
    <div className="container center">
        <h4 id="FFheadText">Dashboard</h4>
        <br />
            <div class="row">
    <form class="col s12">
      <div class="row">
          <h5 id="FFheadText">Search your friends list!</h5>
        <div class="input-field col s6">
          <input placeholder="Username" id="search_by_name" type="text" onChange={this.handleChange}/>
          <label for="search_by_name">Search By Name</label>
          <button className="btn waves-effect waves-light" id="ButtonColor" type="submit" name="action">Search
    <i className="material-icons right">search</i>
  </button>
        </div>
        <div class="input-field col s6">
        <textarea id="search_by_game" class="materialize-textarea"></textarea>
          <label for="search_by_game">Search By Game</label>
          <button className="btn waves-effect waves-light" id="ButtonColor" type="submit" name="action" onChange={this.handleChange}>Search
    <i className="material-icons right">search</i>
  </button>
        </div>
      </div>
      </form>
      <table className="centered highlight bordered">
        <thead>
          <tr>
              <th>Username</th>
              <th>Games</th>
              <th>Discord Name</th> 
          </tr>
        </thead>
            {/* <FriendList/> */}
        </table>
        </div>
        <a class="waves-effect waves-light btn" href="/addgame" id="ButtonColor"><i class="material-icons left">videogame_asset</i>Add a new game?</a>
    </div>)
    }
};

export default Dashboard;