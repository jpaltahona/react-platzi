import React,  { Component } from 'react';

class BadgeFrom extends Component{

    handleClick = e => {
        console.log({
            value: e.target.value
        })
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.props.formValues)
    }

    render(){
        return(
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                            <input onChange={this.props.onChange} 
                                className="form-control" 
                                type="text"
                                name="firstName"
                                value={this.props.formValues.firstName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                            <input onChange={this.props.onChange} 
                                className="form-control" 
                                type="text"
                                name="lastName"
                                value={this.props.formValues.lastName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                            <input onChange={this.props.onChange} 
                                className="form-control" 
                                type="email"
                                name="email"
                                value={this.props.formValues.email}
                            />
                    </div>
                    <div className="form-group">
                        <label>Job Tile</label>
                            <input onChange={this.props.onChange} 
                                className="form-control" 
                                type="text"
                                name="jobTitle"
                                value={this.props.formValues.jobTitle}
                            />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                            <input onChange={this.props.onChange} 
                                className="form-control" 
                                type="text"
                                name="twitter"
                                value={this.props.formValues.twitter}
                            />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleClick} >Save</button>
                </form>
            </div>
        )
    }
}
export default BadgeFrom;