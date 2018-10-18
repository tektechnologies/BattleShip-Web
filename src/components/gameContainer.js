import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/game-actions';
import Board from './board';

class GameContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      locked: {
        'input1': true,
        'input2': true,
      },
      value1: '',
      value2: '',
      confirmationText: 'Placing ship at ',
    };
  }
  componentDidMount(){
    this.props.fetch(this.props.match.params.id);
  }


  changeHandler = e =>{
    let val = e.target.value;
    let className = e.target.className;
    if(val.length !== 2 || (val.charCodeAt(0) > 101 || val.charCodeAt(0) < 97) || (val[1] > 5 || val[1] < 1)){
      this.setState = ({
        locked: {
          className: true,
        },
      });
    } else{
      this.locked[className] = false;
      if(className === 'input1'){
        this.setState = ({
          value1: val,
        });
      } else{
        this.setState = ({
          value2: val,
        });
      }
    }
  }
  submitHandler = e =>{
    e.preventDefault();
    this.props.move(this.props.game._id, this.state.value1, this.state.value2);
  }

  render(){
    console.log(this.props.game);
    const {_id, phase, shipStatuses, yourTurn, userShots, opponentShots} = this.props.game;
    if(phase[0] !== '0' || phase[0] !== '1' || phase[0] !== '2'){
      this.setState = ({
        locked: {
          input2: false,
        },
      });
      this.setState = ({
        confirmationText: 'Firing at ',
      });
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
                  <input className='input1' type='text' onChange={this.changeHandler} required minLength='2' maxLength='2'/> 
                  <input className='input2' type='text' onChange={this.changeHandler} required minLength='2' maxLength='2'/>
                </div>
              
                :
                <div>
                  <input className='input1' type='text' onChange={this.changeHandler} required minLength='2' maxLength='2'/>
                </div>
              }
              <p>{this.state.confirmationText === 'Placing ship at ' ?
                `${this.state.confirmationText}${this.state.value1} to ${this.state.value2}.`//e.g. 'Placing ship at a1 to d1.'
                :
                `${this.state.confirmationText}${this.state.value1}.`//e.g. 'Firing at a1.'  
              }</p>
              {!this.state.locked['input1'] && !this.state.locked['input2'] && yourTurn ?
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

const mapStateToProps = state => state.game;

const mapDispatchToProps = (dispatch) => ({
  fetch: _id => dispatch(actions.gameFetch(_id)),
  move: user => dispatch(actions.gameMove(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);