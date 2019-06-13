import React, {Component} from 'react';

import '../components/styles/BadgeNew.scss'

import logotipo from '../images/badge-header.svg';
import Badge from '../components/Badge' ;
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
                <div className="badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={logotipo} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter} 
                                jobTitle={this.state.form .jobTitle}
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