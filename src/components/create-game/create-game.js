import React, { Component } from 'react';
import * as actions from '../../actions/game-actions';
import {connect} from 'react-redux';
import './create-game.css';
import { withRouter } from 'react-router-dom';

class CreateGame extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let value = event.target.opponent.value;
    this.props.create(value).then((game) =>{
      this.props.history.push(`/game/${game._id}`);
    });
    
    console.log(this.props.game);
  }
  
  render() {
    return (
      <form className ="create-game-form" onSubmit={this.handleSubmit}>
        <p>Enter the name of your opponent and hit Create Game to start a new game!
        </p>
        <input
          className="create-game-input" 
          type="text"
          name="opponent"
          placeholder="opponent username"
        />
        <button type="submit" className="create-game-button">
          Create Game
        </button>
      </form>
    );
  }

}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  create: opponent => dispatch(actions.gameCreate(opponent)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateGame));