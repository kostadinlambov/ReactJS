import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class LogInForm extends Component {
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

    handleSubmit(event) {
        event.preventDefault();
        fetch(
            'http://localhost:5000/auth/login',
            {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(this.state.form), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(data => data.json())
            .then(response => {
                if (response.success && response.token) {
                    localStorage.setItem('token', response.token)
                    // this.props.setLoggedIn();
                    this.setRedirect();
                }
            }).catch(err => console.log(err))
    }

    setRedirect = () => {
        this.setState({
            fireRedirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.fireRedirect) {
            return <Redirect to='/create' />
        }
    }


    render = () => {
        return (
            <div>
                <h1>Login Form</h1>
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
                    <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Submit</button>
                </form>
                {this.renderRedirect()}
            </div>
        )
    }

}


