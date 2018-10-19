import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/game-actions';
import Board from './board';
import './styles/game-form.css';

class GameContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      locked: true,
      value1: '',
      value2: '',
    };
  }

  componentDidMount(){
    this.props.fetch(this.props.match.params.id);
    this.fetchInterval = setInterval(()=>{
      this.props.fetch(this.props.match.params.id);}
    ,10000);
  }

  componentWillUnmount(){
    clearInterval(this.fetchInterval);
  }

  validateCoord(val){
    return !(val.length !== 2 || (val.charCodeAt(0) > 101 || val.charCodeAt(0) < 97) || (val[1] > 5 || val[1] < 1));
  }

  validateState(state){
    let valid = this.validateCoord(state.value1);
    if(this.props.phase[0] <= '2'){
      valid = valid && this.validateCoord(state.value2);
      //TODO: check diagonals
    } 
    return valid;
  }

  changeHandler = e =>{
    let val = e.target.value;
    let inputName = e.target.name;
       
    this.setState({
      [inputName]: val,      
    });

    this.setState( state =>({
      locked: !this.validateState(state),
    }));
  }

  submitHandler = e =>{
    e.preventDefault();
    this.props.move(this.props._id, this.state.value1, this.state.value2);
    var state = {
      locked: true,
      value1: '',
      value2: '',
    };
    this.setState(state);
  }

  render(){
    const {_id, phase, shipStatuses, yourTurn, userShots, opponentShots} = this.props;
    if(!phase){
      return <h1>Loading...</h1>;
    }
    return (
      <React.Fragment>
        <div id={_id}>{/*for testing purposes*/}
          <h3 className='phase'><p>{yourTurn ? 'It\'s your turn!' : 'Waiting for opponent...' }</p><p>{phase[0] <= '2' ? 'Placing ships' : ''}</p></h3>
          <Board shipStatuses={shipStatuses} userShots={userShots} opponentShots={opponentShots} />
          <aside>
            <form className="game-form" onSubmit={this.submitHandler}>
              {phase[0] <= '2' ?
                <div>
                  <input className="input1" name='value1' type='text' value={this.state.value1} onChange={this.changeHandler} required minLength='2' maxLength='2'/> 
                  <input className="input2" name='value2' type='text' value={this.state.value2} onChange={this.changeHandler} required minLength='2' maxLength='2'/>
                </div>
                :
                <div>
                  <input name='value1' type='text' value={this.state.value1} onChange={this.changeHandler} required minLength='2' maxLength='2'/>
                </div>
              }
              <p className="input-text">{phase[0] <= '2' ?
                `Placing ship from ${this.state.value1} to ${this.state.value2}.`
                :
                `Firing at ${this.state.value1}.` 
              }</p>
              {(!this.state.locked && yourTurn) ?
                <button className="game-button" type='submit'>Confirm</button>
                :
                <button className="game-button" type='submit' disabled>Confirm</button>
              }
            </form>
          </aside>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {return state.game || {};};

const mapDispatchToProps = (dispatch) => ({
  fetch: _id => dispatch(actions.gameFetch(_id)),
  move: (id, val1, val2) => dispatch(actions.gameMove(id, val1, val2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);