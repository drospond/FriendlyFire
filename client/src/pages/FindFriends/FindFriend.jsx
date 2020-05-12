import React from 'react';

const FindFriend = () => {
    return (
        <div className="container center">
            <form class="col s12">
      <div class="row">
          <h5 id="FFheadText">Search for a new friend!</h5>
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
        </div>
    );
};

export default FindFriend;