import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import observer from '../../infrastructure/observer';


export default class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            password: null
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        console.log(fieldName + ': ' + fieldValue)

        this.setState({
            [fieldName]: fieldValue
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        requester.post('user', '', 'basic', this.state)
            .then(res => {
                console.log(res);
                observer.trigger(observer.events.loginUser, res.username)
                sessionStorage.setItem('authtoken', res._kmd.authtoken)
            })
    }


    render = () => {
        return (
            <div>
                <form id="registerForm" onSubmit={this.handleSubmit}>
                    <h2>Register</h2>
                    <label>Username:</label>
                    <input name="username" type="text" onChange={this.handleChange} />
                    <label>Password:</label>
                    <input name="password" type="password" onChange={this.handleChange} />
                    <label>Repeat Password:</label>
                    <input name="repeatPass" type="password" onChange={this.handleChange} />
                    <input id="btnRegister" type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }

}


