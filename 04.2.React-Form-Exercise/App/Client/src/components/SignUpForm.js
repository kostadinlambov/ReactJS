import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class SignUpForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {},
            fireRedirect: false
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        console.log(event.target.value)
        const name = event.target.dataset.name;
        const value = event.target.value;
        const newObj = {}
        newObj[name] = value;

        console.log(name + ': ' + value)

        this.setState({
            form: Object.assign(this.state.form, newObj)
        })
    }

    setRedirect = () => {
        this.setState({
            fireRedirect: true
        })
    }

    renderRedirect = () => {
        if(this.state.fireRedirect){
            return <Redirect to='/login' />
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(
            'http://localhost:5000/auth/signup',
            {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(this.state.form), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(data => data.json())
            .then(response => {
                console.log(response);
                this.setRedirect();
                // this.renderRedirect();
              
            })
    }

    render = () => {
        return (
            <div>
                <h1>Sign Up</h1>
                <form className="max-width-60">
                    <div className="form-group">
                        <label className="text-center" htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            data-name="email"
                            onChange={this.handleChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            data-name="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">User name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter user name"
                            data-name="name"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Submit</button>
                </form>
                {this.state.fireRedirect && (
                    <Redirect to='/login' />
                )}
            </div>
        )
    }

}


