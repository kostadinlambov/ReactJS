import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import './style/site.css'
import Notifications from './components/common/Notifications';
import Catalog from './components/catalog/Catalog';
import Logout from './components/user/Logout';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Notifications /> 
        <Route path='/' exact component={Home} />
        <Route path='/catalog' exact component={Catalog} />
        <Route path='/logout' exact component={Logout} />
      </div>
    );
  }
}

export default App;
