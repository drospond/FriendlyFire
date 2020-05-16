import React from 'react';

const Friend = (props) => {
    return (
        <tr>
        <td>{props.id}</td>
      <td>{props.handle}</td>
      <td>{props.discord}</td>
    </tr>
    );
};

export default Friend;