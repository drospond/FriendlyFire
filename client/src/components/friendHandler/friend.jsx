import React from 'react';

const Friend = (props) => {
    return (
        <tr>
        <td>{props.id}</td>
      <td>{props.username}</td>
      <td>{props.game}</td>
      <td>{props.discord}</td>
    </tr>
    );
};

export default Friend;