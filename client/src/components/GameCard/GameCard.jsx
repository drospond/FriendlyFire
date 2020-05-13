import React from "react";

const GameCard = (props) => {
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
            <div style={style.floatLeft}>
              <h4>{props.name}</h4>
            </div>
            <form>
              Platforms:{" "}
              {props.platform.map((platform) => {
                return (
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>{platform.platform.name}</span>
                    </label>
                  </p>
                );
              })}
            </form>
            <button
              className="waves-effect waves-light btn"
              id="ButtonColor"
              style={style.floatRight}
            >
              <i className="material-icons">save</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
