import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import Header from './header';
import Footer from './header';
import Home from './pages/Home';
import Rooms from './pages/Rooms';

ReactDOM.render(    
  <Router>
    <Header/>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={Home} />
    <Route exact path="/rooms" component={Rooms} />
    <Footer/>
  </Router>,
  document.getElementById('root')
);