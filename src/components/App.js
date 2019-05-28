import React, { Component }from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import confLogo from '../images/badge-header.svg';
import './styles/app.scss'; 

class App extends Component{
    render(){ 

        const firsName = "Jean";
        const lastName = "Altahona";
        
        
        return(
            <div className="Badge">
                <div className="Badge_header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="Badge__section-name">
                    <img src="https://secure.gravatar.com/avatar/2a0699a78cb5d7317aba9c469f91db01" alt="avatar" className="avatar"/>
                    <h1>{firsName} <br /> {lastName} </h1>
                </div>
                <div className="Badge__section-info">
                    <p>fronTend Engineer</p>
                    <p> @sparragus </p>
                </div>
                <div className="Badge__footer">
                    #Platzi
                </div>
            </div>  
        );
    }
}

export default App;