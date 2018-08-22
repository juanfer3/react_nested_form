import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {  Route, Switch, Redirect } from 'react-router-dom';



import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import PostDetails from './Components/Posts/PostDetails';
import prueba from './Components/Posts/prueba';


import Posts from './Components/Posts/Posts'

class App extends Component {
  render() {
    return (
      <div >
        <Navbar/>
        <Route >
            <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route  path="/posts" component={Posts}/>
                <Route path="/post/edit/:id" component={PostDetails} />
                
              </Switch>
              </Route>
      </div>
    );
  }
}

export default App;
