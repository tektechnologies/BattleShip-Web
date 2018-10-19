import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.css';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAuth: false,
      type: 'signup',
    };
  }

  hideModal = () => {
    this.setState({
      showAuth: false,
    });
  };

  render() {
    const modalName = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={modalName}>
        <main>
          <button className='exit' onClick={this.props.handleClose}>X</button>
          {this.props.children}
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
};