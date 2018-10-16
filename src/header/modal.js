import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auth from '../components/auth';

export default class Modal extends Component {
  render() {
    const modalName = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={modalName}>
        <main>
          <Auth/>
          <button onClick={this.props.handleClose} className='cancel'>Cancel</button>
        </main>
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  handleClose: PropTypes.func,
  children: PropTypes.node,
}