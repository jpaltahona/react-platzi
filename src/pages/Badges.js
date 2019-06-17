import React, {Component} from 'react';

import '../components/styles/BadgeNew.scss'

import logotipo from '../images/badge-header.svg';
import BadgesList from '../components/BadgeList';
import { Link } from 'react-router-dom';

class Badges extends Component{

state = {
    loading: true,
    error: null,
    data: {
        results: []
    }
}
componentDidMount(){
    this.fetchCharacters()
}

fetchCharacters = async () => {

    this.setState({
        loading: true, error: null
    })

    try{
        const response = await fetch('https://rickandmortyapi.com/api/character/')
        const datos = await response.json();
        this.setState({
            loading: false,
            data: datos
        });

    } catch(error){
        this.setState({
            loading: false,
            error: error,
        });
    }
    
};

    render(){
        return(
            <React.Fragment>
                <div className="badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={logotipo} alt="logo" />
                        </div>
                    </div>
                </div>
                
                <div className="Badges-container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new">New badge </ Link>
                    </div>
                </div>
                <div className="badges__list">
                    <div className="badges__container">
                        <BadgesList badges={this.state.data.results}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;