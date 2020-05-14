import React, { useState } from "react";
import "./GameCard.css";

const GameCard = (props) => {
  const [gameState, setGameState] = useState({
    platform: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGameState({
      [name]: value,
    });
  };

  const gameInfo = {
    name: props.name,
    platform: gameState.platform,
  };

  const style = {
    cardImg: {
      maxHeight: "125px",
    },
    floatRight: { float: "right" },
    floatLeft: { float: "left" },
  };
  return (
    <div className="col s12 m7">
      <div className="card horizontal">
        <div className="card-image">
          <img className="cardImage" src={props.imgURL} alt={`${props.name}`}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <div className="row">
              <div className="col s6">
                <div style={style.floatLeft}>
                  <h4>{props.name}</h4>
                </div>
              </div>
              <form>
                <div className="col s5">
                  Platforms:{" "}
                  {props.platform.map((platform) => {
                    return (
                      <p>
                        <label>
                          <input
                            name="platform"
                            type="radio"
                            onChange={handleChange}
                            value={platform}
                          />
                          <span>{platform}</span>
                        </label>
                      </p>
                    );
                  })}
                </div>
              </form>
              <div className="col s1">
                <button
                  className="waves-effect waves-light btn save"
                  id="ButtonColor"
                  type="submit"
                  onClick={() => props.saveGame(gameInfo)}
                >
                  <i className="material-icons">save</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
