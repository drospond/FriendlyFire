import React from 'react';

const Friend = (props) => {
    return (
        <div>
        <tr scope="row">
        <td>{props.id}</td>
      <td>{props.username}</td>
      <td>{props.game}</td>
      <td>{props.discord}</td>
    </tr>
        </div>
    );
};

export default Friend;