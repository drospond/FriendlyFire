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
    <div class="col s12 m7">
      <div class="card horizontal">
        <div class="card-image">
          <img src={props.imgURL} style={style.cardImg} />
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <div className="row">
              <div className="col s5">
                <div style={style.floatLeft}>
                  <h4>{props.name}</h4>
                </div>
              </div>
              <form>
                <div className="col s6">
                  Platforms:{" "}
                  {props.platform.map((platform) => {
                    return (
                      <p>
                        <label>
                          <input
                            name="platform"
                            type="radio"
                            onChange={handleChange}
                            value={platform.platform.name}
                          />
                          <span>{platform.platform.name}</span>
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
