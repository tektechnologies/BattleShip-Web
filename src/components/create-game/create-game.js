import React, { Component } from 'react';
import * as actions from '../../actions/game-actions';
import {connect} from 'react-redux';
// import './create-game.css';

class CreateGame extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let value = event.target.opponent.value;
    this.props.create(value);
    console.log(value);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Enter the name of your opponent and hit Create Game to start a new game!
        </p>
        <input 
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
  game: state.game,
});

const mapDispatchToProps = (dispatch) => ({
  create: opponent => dispatch(actions.gameCreate(opponent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame);