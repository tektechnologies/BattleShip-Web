import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';

export default class Nav extends Component {
  render() {
    return (
      <header className="nav">
        <nav>
          <Link to='/'><h1>Battle Ship Delta</h1></Link>
          <Link to='/'>Insert Dashboard Link Here</Link> { }
          <Link to='/'>Insert New Game Link Here</Link> { }
          <button className='signin' onClick={this.showModal}>Sign In Here</button> { }
          <button className='signup'>Sign Up Here</button>
        </nav>
      </header>
    );
  }
}