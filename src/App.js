import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// ADD THE REACT ROUTER
// BROSWERROUTER IS THE MAIN COMPONENT
// LINK is the new anchor tag. works as <a href="">
// react.router will conver the link tag into an anchor tag that is safe
import { BrowserRouter as Router, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // router goes around everythin that should be controlled by the router
      // ANCHOR TAGS ARE BAD WITH ROUTER!!!!
      <Router>
        <div className="App">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </div>
      </Router>
    );
  }
}

export default App;
