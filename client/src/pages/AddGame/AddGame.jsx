import React from 'react';

const AddGame = () => {
    return (
        <div className="container center">
           <h3>Add a new game to your profile?</h3>
           <form class="col s12">
      <div class="row">
        <div class="input-field col offset-s4 s4">
          <input placeholder="Doom" id="add_a_game" type="text"/>
          <label for="add_a_game">Search Game here</label>
          <button className="btn waves-effect waves-light" id="ButtonColor" type="submit" name="action" >Add Game<i className="material-icons right">search</i>
  </button>
        </div>
        </div>
        </form>
        <a class="waves-effect waves-light btn" href="/dashboard"id="ButtonColor"><i class="material-icons left" >arrow_back</i>Back to the dashboard</a>
        </div>
    );
};

export default AddGame;