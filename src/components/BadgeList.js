import React, { Component } from 'react';

class BadgeList extends Component{
    render(){
        return(
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                  <p>{badge.firstName}</p>
              </li>
            );
          })}
        </ul>
        );
    }
}

export default BadgeList;