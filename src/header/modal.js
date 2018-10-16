import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  render() {
    const modalName = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={modalName}>
        <main>
          {this.props.title &&
            <h2>{this.props.title}</h2>}
          
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
}