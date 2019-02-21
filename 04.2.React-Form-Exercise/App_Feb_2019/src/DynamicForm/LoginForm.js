import React from 'react';
import './login.css';

class LogInForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event){
        event.preventDefault();
        const target = event.target;

        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={(event) => {
                   // TODO: prevent the default behavior of the event and use the loginUser function by passing it the data from the form
                    event.preventDefault();
                    this.props.loginUser(this.state)
                }}>
                    <label>Usersname</label>
                    <input 
                        type="text" 
                        id="usernameLogin"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeHandler}
                    />

                    <label>Password</label>
                    <input 
                        type="password" 
                        id="passwordLogin"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                    />

                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default LogInForm;
