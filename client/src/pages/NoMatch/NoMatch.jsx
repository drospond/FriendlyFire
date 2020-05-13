import React, { Component } from 'react';

class NoMatch extends Component {
    render() {
        return (
            <div>
              <h1>
                  There's no page here! 
                  Go back to the dashboard?
                </h1>  
                <a class="waves-effect waves-light btn" href="/dashboard"id="ButtonColor"><i class="material-icons left" >arrow_back</i>Back to the dashboard</a>
            </div>
        );
    }
}

export default NoMatch;