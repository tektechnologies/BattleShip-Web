import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';
import Auth from '../auth';
import './nav.css';
import { connect } from 'react-redux';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAuth: false,
      type: 'signup',
    };
  }
  showModal = (e) => {
    this.setState({
      showAuth: true,
      type: e.target.value,
    });
  };

  hideModal = () => {
    this.setState({
      showAuth: false,
    });
  };

  render() {
    return (
      <header className="nav">
        {this.props.auth ? 
          <div>
            <nav>
              <Link to='/'><h1>BattleShip Delta</h1></Link>
              <Link to='/dashboard'>Dashboard</Link>
              <Link to='/creategame'>Create Game</Link>
              <button>sign out</button>
            </nav>
          </div>
          :
          <div>
            <nav>
              <Link to='/'><h1>BattleShip Delta</h1></Link>
              <button className='signin' value='signin' onClick={this.showModal}>Sign In Here</button>
              <button className='signup' value='signup' onClick={this.showModal}>Sign Up Here</button>
              <Modal title='Authentification' show={this.state.showAuth} handleClose={this.hideModal}>
                <Auth type={this.state.type} />
                <button className='cancel' onClick={this.hideModal}>Cancel</button>
              </Modal>
            </nav>
          </div>
        }
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect (
  mapStateToProps
)(Nav);