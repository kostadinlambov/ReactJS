import React, { Component } from 'react';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import SignUpForm from './components/SignUpForm'
import LogInForm from './components/LogInForm'
import LoggedInScreen from './components/loggedIn/LoggedInScreen'
import { Route } from 'react-router-dom'
import AddPokemonForm from './components/loggedIn/AddPokemomnForm';

class App extends Component {
  constructor() {
    super()
    let route = ''
    if (localStorage.getItem('token')) {
      route = 'loggedIn'
    }
    this.state = {
      route
    }

    this.showAppropriateComponent = this.showAppropriateComponent.bind(this)
    this.switchLoginSignUp = this.switchLoginSignUp.bind(this)
    this.setLoggedIn = this.setLoggedIn.bind(this)

  }
  setLoggedIn() {
    this.setState({ route: 'loggedIn' })
  }

  switchLoginSignUp() {
    if (this.state.route === 'login') {
      this.setState({ route: '' })
    } else {
      this.setState({ route: 'login' })
    }
  }

  showAppropriateComponent() {
    if (this.state.route === 'login') {
      return <LogInForm setLoggedIn={this.setLoggedIn} />
    } else if (this.state.route === 'loggedIn') {
      return <LoggedInScreen />
    }
    return <SignUpForm />
  }

  render() {
    return (
      <div className="App wrapper">
        {/* <button onClick={this.switchLoginSignUp} className="btn btn-link">Change Login Form</button> */}
        {/* {this.showAppropriateComponent()} */}

        <Route path='/' exact component={SignUpForm} />
        <Route path='/signup' component={SignUpForm} />
        <Route path='/login' component={LogInForm} />
        <Route path='/create' component={LoggedInScreen} />
      </div>
    );
  }
}

export default App;
