import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';
import Auth from '../components/auth';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { showAuth: false };
  }
  
  showModal = () => {
    this.setState({showAuth: true })
  }

  hideModal = () => {
    this.setState({showAuth: false,})
  }

  render() {
    return (
      <header className="nav">
        <nav>
          <Link to='/'><h1>Battle Ship Delta</h1></Link>
          <Link to='/'>Insert Dashboard Link Here</Link> { }
          <Link to='/'>Insert New Game Link Here</Link> { }
          <button className='signin' onClick={this.showModal}>Sign In Here</button>
          <Modal title='auth' show={this.state.showAuth} handleClose={this.hideModal}>
            <Auth/>
            <button className='cancel' onClick={this.hideModal}>Cancel</button>
          </Modal>
           { }
          <button className='signup'>Sign Up Here</button>
        </nav>
      </header>
    );
  }
}