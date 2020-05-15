import React, {Component} from 'react';
import FriendList from '../../components/friendHandler/friendList';
import axios from "axios"

class FindFriend extends Component{
  state = {
    friendResults: [],
    friendsToShow: [],
    searchGame: "",
    searchName: "",
  }

  componentDidMount = {
  
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitName =(event) => {
    event.preventDefault();
    const searchName = this.state.searchName;
    axios.get(`/api/friend/find?name=${searchName}`).then((response =>{
      console.log(response.data)
      // debugger
    this.setState({friendResults: [response.data]
      })})).catch(err => {
        if(err){
            console.log(err)
        }});
    }
  
    handleSubmitGame =(event) => {
      event.preventDefault();
      const searchGame = this.state.searchGame;
      axios.get(`/api/friend/find?game=${searchGame}`).then((response =>{
        console.log(response.data.results)
      this.setState({friendResults: response.data.results
        })})).catch(err => {
          if(err){
              console.log(err)
          }});
      }
    

  render(){
    return (
        <div className="container center">
            <form class="col s12" onSubmit={this.handleSubmitName}>
      <div class="row">
          <h5 id="FFheadText">Search for a new friend!</h5>
        <div class="input-field col s6">
          <input placeholder="Username" id="search_by_name" type="text" name="searchName" onChange={this.handleChange}/>
          <label for="search_by_name">Search By Name</label>
          <button className="btn waves-effect waves-light" id="ButtonColor" type="submit" name="action" >Search
    <i className="material-icons right">search</i>
  </button>
        </div>
        <div class="input-field col s6">
        <textarea id="search_by_game" class="materialize-textarea"></textarea>
          <label for="search_by_game">Search By Game</label>
          <button className="btn waves-effect waves-light" id="ButtonColor" type="submit" name="action" onChange={this.handleChange} onSubmit={this.handleSubmit}>Search
    <i className="material-icons right">search</i>
  </button> 
        </div>
        </div>
        </form>
        <h4 className="left">Results:</h4>
        <table className="centered highlight bordered">
        <thead>
          <tr>
            <th>User's ID</th>
              <th>Username</th>
              <th>Games</th>
              <th>Discord Name</th> 
          </tr>
        </thead>
         <FriendList friendResults={this.state.friendResults}/>
        </table>
        <a class="waves-effect waves-light btn" href="/dashboard"id="ButtonColor"><i class="material-icons left" >arrow_back</i>Back to the dashboard</a>
        </div>
    );
};
}
export default FindFriend;