import React, {Component} from 'react';

import logo from '../images/badge-header.svg';
import './styles/navbar.scss'

class Navbar extends Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a href="/" className="Navbar__brand">
                        <img className ="Navbar__brand-logo" src={logo} alt="logo" />
                        <span className="nuevo">Platzi</span>
                        <span>conf</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;