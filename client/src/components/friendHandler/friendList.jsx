import React, { Component } from 'react';
import friend from './friend'

const friendList = (props) => {
        return (
            <section>
                <table className="centered highlight bordered">
        <thead>
          <tr>
              <th>Username</th>
              <th>Games</th>
              <th>Discord Name</th> 
          </tr>
        </thead>
        <tbody>
            {props.friendResults.map((friendResults) =>( 
                <Friend {...friendResults}
                key ={friendResults.id} 
              id={friendResults.id}
              Username={friendResults.username}
              Games={friendResults.games}
              discordName={friendResults.discord}/>
            ))}
        </tbody>
        </table>
            </section>
        );
    }


export default friendList;