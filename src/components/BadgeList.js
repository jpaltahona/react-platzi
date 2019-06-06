import React, { Component } from 'react';

class BadgeList extends Component{
    render(){
        return(
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                  <img src={badge.avatarUrl} />
                  <div>
                    <h5>{badge.firstName}</h5>
                    <span>{badge.twitter}</span><br />
                    <span>{badge.jobTitle}</span>
                  </div>
              </li>
            );
          })}
        </ul>
        );
    }
}

export default BadgeList;