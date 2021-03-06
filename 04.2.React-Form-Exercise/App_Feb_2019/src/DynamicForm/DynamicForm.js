import React from "react";
import RegisterForm from "./RegisterForm";
import LogInForm from "./LoginForm";
import CreateForm from "../Games/CreateForm";

class DynamicForm extends React.Component {

    render() {
        return (
            <div>
                <div>
                    {/*TODO: render a form depending on wheather the loginForm property is true*/}
                    {
                        !localStorage.getItem('token') && (this.props.loginForm
                            ? <LogInForm loginUser={this.props.loginUser} />
                            : <RegisterForm registerUser={this.props.registerUser} />)
                    }
                    {localStorage.getItem('token') && <CreateForm createGame={this.props.createGame} />}
                </div>
            </div>
        )
    }
}

export default DynamicForm