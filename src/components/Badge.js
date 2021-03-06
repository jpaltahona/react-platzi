import React, { Component }from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import confLogo from '../images/badge-header.svg';
import './styles/app.scss'; 

class Badge extends Component{
    render(){         
        return(
            <div className="Badge">
                <div className="Badge_header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="Badge__section-name">
                    <img src={this.props.avartUrl} alt="avatar" className="avatar"/>
                    <h1>{this.props.firstName} <br /> {this.props.lastName} </h1>
                </div>
                <div className="Badge__section-info">
                    <p>{this.props.jobTitle}</p>
                    <p> {this.props.twitter} </p>
                </div>
                <div className="Badge__footer">
                    #Platzi
                </div>
            </div>  
        );
    }
}

export default Badge;