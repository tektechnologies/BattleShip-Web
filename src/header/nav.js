import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../components/auth';

export default class Nav extends Component {
  render() {
    return (
      <header className="nav">
        <nav>
          <Link to='/'><h1>Battle Ship Delta</h1></Link>
          <Link to='/'>Insert Dashboard link here</Link>
          <Link to='/'>Insert New Game Link Here</Link>
          
        </nav>
      </header>
    );
  }
}