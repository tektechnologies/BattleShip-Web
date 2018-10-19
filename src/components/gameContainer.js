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
  }

  componentDidUpdate(){
    console.log(this.state);
  }
  validateCoord(val){
    return !(val.length !== 2 || (val.charCodeAt(0) > 101 || val.charCodeAt(0) < 97) || (val[1] > 5 || val[1] < 1));
  }

  validateState(state){
    let valid = this.validateCoord(state.value1);
    if(this.props.phase[0] <= '2'){
      valid = valid && this.validateCoord(state.value2);
      //check diagonals
    } 
    return valid;
  }

  changeHandler = e =>{
    console.log('Hi keith');
    let val = e.target.value;
    let inputName = e.target.name;
    console.log({val, inputName});
    //var lockThis = val.length !== 2 || (val.charCodeAt(0) > 101 || val.charCodeAt(0) < 97) || (val[1] > 5 || val[1] < 1);
   
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
  }

  render(){
    console.log(this.props);
    const {_id, phase, shipStatuses, yourTurn, userShots, opponentShots} = this.props;
    if(!phase){
      return <h1>Loading...</h1>;
    }
    return (
      <React.Fragment>
        <div id={_id}>{/*for testing purposes*/}
          <h3 className='phase'>{phase}</h3>
          <Board shipStatuses={shipStatuses} userShots={userShots} opponentShots={opponentShots} />
          <aside>
            <form className="game-form" onSubmit={this.submitHandler}>
              {phase[0] <= '2' ?
                <div>
                  <input className="input1" name='value1' type='text' onChange={this.changeHandler} required minLength='2' maxLength='2'/> 
                  <input className="input2" name='value2' type='text'  onChange={this.changeHandler} required minLength='2' maxLength='2'/>
                </div>
              
                :
                <div>
                  <input name='value1' type='text' onChange={this.changeHandler} required minLength='2' maxLength='2'/>
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