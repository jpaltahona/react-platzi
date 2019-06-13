import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/badge-header.svg';
import './styles/navbar.scss'

class Navbar extends Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className ="Navbar__brand-logo" src={logo} alt="logo" />
                        <span className="nuevo">Platzi</span>
                        <span>conf</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;