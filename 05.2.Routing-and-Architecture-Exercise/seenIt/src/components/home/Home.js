import React, { Component } from 'react'
import LogInForm from '../user/LoginForm';
import '../../style/submit.css'
import RegisterForm from '../user/RegisterForm';
import Logout from '../user/Logout';
import About from './About';

export default class Home extends Component {

    render = () => {
        return (
            <section id="viewSignIn">
                <div className="welcome">
                    <div className="signup">                    
                        <LogInForm {...this.props} />
                        <RegisterForm />
                    </div>
                    <div class="about">
                        <About />
                    </div>
                </div>

            </section >
        )

    }
}