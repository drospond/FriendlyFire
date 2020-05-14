import React, {Component} from 'react';
// import axios from "axios"

class FindFriend extends Component{
  state = {
    friendResults: [],
    search: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit =(event) => {
    event.preventDefault();

  }

  render(){
    return (
        <div className="container center">
            <form class="col s12">
      <div class="row">
          <h5 id="FFheadText">Search for a new friend!</h5>
        <div class="input-field col s6">
          <input placeholder="Username" id="search_by_name" type="text"/>
          <label for="search_by_name">Search By Name</label>
          <button className="btn waves-effect waves-light" id="ButtonColor" type="submit" name="action" onChange={this.handleSubmit}>Search
    <i className="material-icons right">search</i>
  </button>
        </div>
        <div class="input-field col s6">
        <textarea id="search_by_game" class="materialize-textarea"></textarea>
          <label for="search_by_game">Search By Game</label>
          <button className="btn waves-effect waves-light" id="ButtonColor" type="submit" name="action">Search
    <i className="material-icons right">search</i>
  </button> 
        </div>
        </div>
        </form>
        <h4 className="left">Results:</h4>
        <table className="centered highlight bordered">
        <thead>
          <tr>
              <th>Username</th>
              <th>Games</th>
              <th>Discord Name</th> 
          </tr>
        </thead>
        <tbody>
            <tr>
            <td>Madarabuu2</td>
            <td>Call Of Duty: Modern Warfare</td>
            <td>RomeoXantos</td> 
            <a class="btn-floating btn-large waves-effect waves-light" id="removeFriends"><i class="material-icons">delete_forever</i></a>
            </tr>
        </tbody>
        </table>
        <a class="waves-effect waves-light btn" href="/dashboard"id="ButtonColor"><i class="material-icons left" >arrow_back</i>Back to the dashboard</a>
        </div>
    );
};
}
export default FindFriend;