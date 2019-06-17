import React, { Component } from 'react';

class BadgeList extends Component{
    render(){
        return(
          <React.Fragment>
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                 <img src={badge.image}  width="80px" height="80px"/>
                  <div>
                    <h5>{badge.name}</h5>
                    <span>@{badge.species}</span><br />
                    <span>{badge.status}</span>
                  </div>
              </li>
                    );
                })}
             </ul>
             
          </React.Fragment>
            
        );
    }
}

export default BadgeList;