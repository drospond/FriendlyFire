import React, { Component } from 'react';
import Friend from './friend'

const FriendList = (props) => {
        return (
        <tbody>
            {props.friendResults.map((friendResults) =>( 
                <Friend {...friendResults}
                key ={friendResults.id} 
              id={friendResults.id}
              Username={friendResults.handle}
              Games={friendResults.games}
              discordName={friendResults.discord}/>
            ))}
        </tbody>
        );
    }


export default FriendList;