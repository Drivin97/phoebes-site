import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from './components/home';
import about from './components/about'
import blogs from './components/blogs'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={home} />
          <Route path='/about' component={about} />
          <Route path='/blogs' component={blogs} />
        </div>
      </Router>
    );
  }
}

export default App;
