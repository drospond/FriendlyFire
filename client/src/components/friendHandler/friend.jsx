import React from "react";

const Friend = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.handle}</td>
      <td>{props.discord}</td>
      {props.saveButton?(
        <td>
          <button
            className="waves-effect waves-light btn save"
            id="ButtonColor"
            type="submit"
            onClick={() => props.addFriend(props.id)}
          >
            <i className="material-icons">person_add</i>
          </button>
        </td>
      ):<></>}
    </tr>
  );
};

export default Friend;
