import React from "react";

const GamesList = (props) => {
  return (
    <table className="centered highlight bordered">
      <thead>
        <tr>
          <th>Game</th>
          <th>Platform</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {props.games.map((game) => {
          return (
            <tr>
              <td>{game.name}</td>
              <td>{game.platform}</td>
              <td>
                <button
                  className="waves-effect waves-light btn save"
                  id="ButtonColor"
                  type="submit"
                  onClick={() => props.deleteGame(game.id)}
                >
                  <i className="material-icons">delete</i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GamesList;
