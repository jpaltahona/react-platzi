import React, {Component} from 'react';

import '../components/styles/BadgeNew.scss'

import Navbar from '../components/Navbar';
import logotipo from '../images/badge-header.svg';
import App from '../components/App' ;
import BadgeForm from '../components/BadgeFrom';

class BadgeNew extends Component{

    state = {  
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
    } };
    
    hableChange = e => {
        this.setState({
            form : {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        });
    };

    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logotipo}/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <App firstname="Jean" 
                                lastname="Altahona" 
                                twitter="@master" 
                                jobTitle="Senior Front Developer"
                                avartUrl="https://jpaltahona.github.io/img/profile.jpg"
                                />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.hableChange.bind(this)}
                            formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;