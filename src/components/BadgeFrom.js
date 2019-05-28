import React,  { Component } from 'react';

class BadgeFrom extends Component{

    handleChange = e => {
        console.log({ value: e.target.value });
    }
    handleClick = e => {
        console.log({
            value: e.target.value
        })
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log('from was submit')
    }

    render(){
        return(
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="fistname" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleClick} >Save</button>
                </form>
            </div>
        )
    }
}
export default BadgeFrom;