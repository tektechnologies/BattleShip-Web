import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/game-actions';
import Board from './board';

class GameContainer extends React.Component{
  constructor(){
    super();
    this.locked = {
      'i1': true,
      'i2': true,
    };
    this.vals = [];
    this.confirmationText = 'Placing ship at';
  }
  componentDidMount(){
    this.props.fetch(this.props._id);
  }


  changeHandler = e =>{
    let val = e.target.value;
    let className = e.target.className;
    if(val.length !== 2){
      this.locked = true;
    }
    else if(val.charCodeAt(0) > 101 || val.charCodeAt(0) < 97){
      this.locked = true;
    }
    else if(val[1] > 5 || val[1] < 1){
      this.locked = true;
    } else{
      this.locked[className] = false;
      if(className === 'i1'){
        this.vals[0] = val;
        this.confirmationText = this.confirmationText.split(' ');
        let insert = this.confirmationText.indexOf('at');
        this.confirmationText[insert] = `at ${val}`;
        this.confirmationText = this.confirmationText.join(' ');
      } else{
        this.vals[1] = val;
        this.cofirmationText += `and ${val}`;
      }
    }
  }
  submitHandler = e =>{
    e.preventDefault();
    this.props.move(this.props._id, this.vals);
  }

  render(){
    const {_id, phase, shipStatuses, yourTurn, userShots, opponentShots} = this.props;
    if(phase[0] !== '0' && phase[0] !== '1' && phase[0] !== '2'){
      this.locked['i2'] = false;
      this.confirmationText = 'Firing at';
    }
    return (
      <React.Fragment>
        <div id={_id}>{/*for testing purposes*/}
          <h3 className='phase'>{phase}</h3>
          <Board shipStatuses={shipStatuses} userShots={userShots} opponentShots={opponentShots} />
          <aside>
            <form onSubmit={this.submitHandler}>
              {phase[0] === '0' && phase[0] === '1' && phase[0] === '2' ?
                <div>
                  <input className='i1' type='text' onChange={this.changeHandler} required minLength='2' maxLength='2'/> 
                  <input className='i2' type='text' onChange={this.changeHandler} required minLength='2' maxLength='2'/>
                </div>
              
                :
                <div>
                  <input className='i1' type='text' onChange={this.changeHandler} required minLength='2' maxLength='2'/>
                </div>
              }
              {!this.locked['i1'] && !this.locked['i2'] && yourTurn ?
                <button type='submit'></button>
                :
                <button type='submit' disabled></button>
              }
            </form>
          </aside>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  game: state.game,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: _id => dispatch(actions.gameFetch(_id)),
  move: user => dispatch(actions.gameMove(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);