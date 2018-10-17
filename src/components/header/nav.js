import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';
import Auth from '../auth';
import './nav.css';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {showAuth: false };
  }
  
  showModal = () => {
    this.setState({
      showAuth: true,
    });
  }

  hideModal = () => {
    this.setState({
      showAuth: false,
    });
  }

  render() {
    return (
      <header className="nav">
        <nav>
          <Link to='/'><h1>Battle Ship Delta</h1></Link>
          <Link to='/dashboard'>Dashboard</Link> { }
          <Link to='/creategame'>Create Game</Link> { }
          <button className='signin' onClick={this.showModal}>Sign In Here</button>
          <Modal title='Authentification' show={this.state.showAuth} handleClose={this.hideModal}>
            <Auth type="signin" />
            <button className='cancel' onClick={this.hideModal}>Cancel</button>
          </Modal>
          { }
          <button className='signup' onClick={this.showModal}>Sign Up Here</button>
        </nav>
      </header>
    );
  }
}