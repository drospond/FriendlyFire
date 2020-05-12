import React from 'react';

const Dashboard = () => {
    return (
    <div className="container center">
        <h2 id="FFheadText"> (insert username here)'s Dashboard</h2>
        <br />
            <div class="row">
    <form class="col s12">
      <div class="row">
          <h5 id="FFheadText">Search for a friend!</h5>
        <div class="input-field col s6">
          <input placeholder="Username" id="search_by_name" type="text"/>
          <label for="search_by_name">Search By Name</label>
          <button className="btn waves-effect waves-light" id="ButtonColor" type="submit" name="action">Search
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
            </tr>
        </tbody>
        </table>
        </div>
        </div>
    );
};

export default Dashboard;