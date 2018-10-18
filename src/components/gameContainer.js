import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/game-actions';
import Board from './board';

class GameContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      locked: {
        'value1': true,
        'value2': true,
      },
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

  changeHandler = e =>{
    console.log('Hi keith');
    let val = e.target.value;
    let inputName = e.target.name;
    console.log({val, inputName});
    var lockThis = val.length !== 2 || (val.charCodeAt(0) > 101 || val.charCodeAt(0) < 97) || (val[1] > 5 || val[1] < 1);
   
    this.setState( state =>({
      locked: {
        ...state.locked,
        [inputName]: lockThis,
      },
      [inputName]: val,
    }));
    
  }
  submitHandler = e =>{
    e.preventDefault();
    this.props.move(this.props.game._id, this.state.value1, this.state.value2);
  }

  render(){
    console.log(this.props);
    const {_id, phase, shipStatuses, yourTurn, userShots, opponentShots} = this.props;
    if(!phase){
      return <h1>Loading...</h1>;
    }
    /*if(phase[0] !== '0' || phase[0] !== '1' || phase[0] !== '2'){
      this.setState = ({
        locked: {
          input2: false,
        },
      });
      this.setState = ({
        confirmationText: 'Firing at ',
      });
    }*/
    return (
      <React.Fragment>
        <div id={_id}>{/*for testing purposes*/}
          <h3 className='phase'>{phase}</h3>
          <Board shipStatuses={shipStatuses} userShots={userShots} opponentShots={opponentShots} />
          <aside>
            <form onSubmit={this.submitHandler}>
              {phase[0] <= '2' ?
                <div>
                  <input name='value1' type='text' onChange={this.changeHandler} required minLength='2' maxLength='2'/> 
                  <input name='value2' type='text'  onChange={this.changeHandler} required minLength='2' maxLength='2'/>
                </div>
              
                :
                <div>
                  <input name='value1' type='text' onChange={this.changeHandler} required minLength='2' maxLength='2'/>
                </div>
              }
              <p>{phase[0] <= '2' ?
                `Placing ship from ${this.state.value1} to ${this.state.value2}.`
                :
                `Firing at ${this.state.value1}.` 
              }</p>
              {(!this.state.locked['value1'] && !this.state.locked['value2'] && yourTurn) ?
                <button type='submit'>Confirm</button>
                :
                <button type='submit' disabled>Confirm</button>
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
  move: user => dispatch(actions.gameMove(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);