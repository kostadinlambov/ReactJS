import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import observer from '../../infrastructure/observer';


export default class LogInForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
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

        requester.post('user', 'login', 'basic', this.state)
            .then(res => {
                console.log(res);

                observer.trigger(observer.events.loginUser, res.username)
                observer.trigger(observer.events.notification, {type: 'success', message: 'Success.'})
                // observer.trigger(observer.events.notification, {type: 'success', message: 'Success.'})
                sessionStorage.setItem('authtoken', res._kmd.authtoken)
                this.props.history.push('\catalog')


            }).catch(err => {
                observer.trigger(observer.events.notification, {type: 'error', message: err.responseJSON.description});
                this.setState( {username: '', password: ''})
            })
    }


    render = () => {
        return (
            <div>
                <form id="loginForm" onSubmit={this.handleSubmit}>
                    <h2>Sign In</h2>
                    <label>Username:</label>
                    <input name="username" type="text" onChange={this.handleChange} value={this.state.username} />
                    <label>Password:</label>
                    <input name="password" type="password" onChange={this.handleChange} alue={this.state.password} />
                    <input id="btnLogin" type="submit" value="Sign In" />
                </form>

            </div>
        )
    }

}


