import React, {Component} from 'react';
import './App.css';
import AppHeader from "./App/AppHeader";
import AppContent from "./App/AppContent";
import AppFooter from "./App/AppFooter";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            games: [],
            hasFetched: false,
            loginForm: false,
        }
    }

    registerUser(user) {
        debugger;
        // TODO: register a user and login
        fetch('http://localhost:9999/auth/signUp',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            debugger;
            console.log('register data: ', data)
            this.setState({loginForm: true})
        })
        .catch(err => console.log('Something went wrong!'))
    }

    loginUser(user) {
        // TODO: login a user and set sessionStorage items username and token
        debugger;
        fetch('http://localhost:9999/auth/signIn',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            debugger;
            const {username, token} = data;
            console.log('login data: ', data);
            localStorage.setItem('token',  token);
            localStorage.setItem('username', username);
            this.setState( {user: username})
            console.log(' user: ', this.state.user);
            debugger;
        })
        .catch(err => console.log('Something went wrong!'))
    }

    logout(event) {
        // TODO: prevent the default state
       // TODO: delete the data from the localStorage
       // TODO: update the state (user: null)
       debugger;
        event.preventDefault();
        localStorage.clear();
        this.setState({user: null})
        debugger;
    }

    componentWillMount() {
        debugger;
          // TODO: check if there is a logged in user using the localStorage (if so, update the state, otherwise set the user to null)
         const currentUserName = localStorage.getItem('username')
          if(currentUserName){
            this.setState({user: currentUserName })
        }
      
        debugger;
       // TODO: fetch all the games
        fetch('http://localhost:9999/feed/games')
        .then(res => res.json())
        .then(data => {
            console.log('games: ', data);
            debugger;
            this.setState( {games: data.games})
            debugger;
        })
        .catch(err => console.log('Something went wrong!'))
    }

    createGame(data) {
        // TODO: create a game using fetch with a post method then fetch all the games and update the state 
        fetch('http://localhost:9999/feed/game/create',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log('games: ', data);
            debugger;
            this.setState((prevState) => ({
                    games: [...prevState.games,  data.game]}
                )) 
            debugger;
        })
        .catch(err => console.log('Something went wrong!'))
    }

    switchForm() {  
         // TODO: switch the value of the loginForm property
        this.setState((prevState) =>  ({
            loginForm : !prevState.loginForm
        }))
     
    }

    render() {
        return (
            <main>
                <AppHeader
                    user={this.state.user}
                    logout={this.logout.bind(this)}
                    switchForm={this.switchForm.bind(this)}
                    loginForm={this.state.loginForm}
                />
                <AppContent
                    registerUser={this.registerUser.bind(this)}
                    loginUser={this.loginUser.bind(this)}
                    games={this.state.games}
                    createGame={this.createGame.bind(this)}
                    user={this.state.user}
                    loginForm={this.state.loginForm}
                />
                <AppFooter/>
            </main>
        )
    }
}

export default App;


