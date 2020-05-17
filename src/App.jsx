import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from './components/home';
import about from './components/about';
import blogs from './components/blogs';
import submit from './components/submit';
import Navbar from './components/customNav';
import Footer from './components/customFooter';
import login from './components/login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className='content'>
            <Route exact path='/' component={home} />
            <Route path='/about' component={about} />
            <Route path='/blogs' component={blogs} />
            <Route path='/submit' component={submit} />
            <Route path='/login' component={login} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
