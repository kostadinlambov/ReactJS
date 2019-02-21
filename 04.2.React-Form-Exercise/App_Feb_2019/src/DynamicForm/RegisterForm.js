import React from 'react';
import './register.css';

class RegisterForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            username : '',
            email: '',
            password: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event){
        event.preventDefault();
        let target = event.target;

        this.setState({
            [target.name]: target.value
        })
    }

    render() {
        console.log('Register');
        debugger;
        return (
            <div className="Register">
                <h1>Sign Up</h1>
                <form onSubmit={(event) => {
                    console.log(this.state)
                    // TODO: prevent the default behavior of the event and use the registerUser function by passing it the data from the form
                    event.preventDefault();
                    this.props.registerUser(this.state)
                }}>
                    <label>Username</label>
                    <input 
                        type="text" 
                        id="usernameReg"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeHandler}
                    />
                    <label>Email</label>
                    <input 
                        type="email" 
                        id="emailReg"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        id="passwordReg"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                    />
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}
export default RegisterForm;