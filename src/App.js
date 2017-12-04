import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './About'
import Home from './Home'
import Topics from './Topics'
import Movies from './Movies'
import Movie from './Movie'
// ADD THE REACT ROUTER
// BROSWERROUTER IS THE MAIN COMPONENT
// LINK is the new anchor tag. works as <a href="">
// react.router will conver the link tag into an anchor tag that is safe
// Think of route like router.get....what to do if user comes to this route
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // router goes around everythin that should be controlled by the router
      // ANCHOR TAGS ARE BAD WITH ROUTER!!!!
      <Router>
        <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to='/movies'>Movies</Link></li>
        </ul>


          { /* if you ONLY want to match the exact path, use exact */ }
          <Route exact path="/" render={() =>(
            <Home title="Home Page" teams={['Pats',"Vikings", "Falcons"]} />
          )} />
          <Route path='/about' component={About} />
          <Route path='/topics' component={Topics} />
          <Route exact path='/movies' component={Movies} />
          <Route path='/movies/:movieId' component={Movie} />

        </div>
      </Router>
    );
  }
}

export default App;
