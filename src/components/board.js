import React from 'react';
import {connect} from 'react-redux';

class Board extends React.Component{
  render(){
    let taken = [];
    let userShots = [];
    let opponentShots = [];
    
    let rows = ['a', 'b', 'c', 'd', 'e'];
    
    //let key = 0; Currently unused, may be necessary for div keys in rendering
    return(
      <React.Fragment>
        <label className='toggle'>
          <input type='checkbox' />
          <span className='knob'></span>
        </label>
        <div className='tBoard'>
          {rows.map(row =>{
            let rowClass = ' row-'; //base row class for css grid
            rowClass += {row}; //changes row class to row-a through row-e
            let coord; //sets default coord class
            for(let i = 1; i < 6; i++){
              let colClass = ' col-'; //base column class for css grid
              let className = 'cell '; //base className for all cells
              colClass += {i}; //changes column class to col-1 through col-5
              coord = `${row}${i}`; //changes coordinate based on cell instance
              //key++; //key for divs (May or may not be neccessary)
              if(userShots.includes(coord)){
                className += 'shot'; //indicates the cell has been targeted by user
                //needs hit indicator for opponent's ships
              }
              className += {rowClass};
              className += {colClass};// className looks like this: 'cell (shot) row-(a-e) col-(1-5)'
              <div key={coord} className={className}></div>;
            }
          })}
        </div>
        <div className='bBoard'>
          {rows.map(row =>{
            let rowClass = ' row-'; //base row class for css grid
            rowClass += {row}; //changes row class to row-a through row-e
            let coord;
            for(let i = 1; i < 6; i++){
              let className = 'cell '; //base className for all cells
              let colClass = ' col-'; //base column class for css grid
              colClass += {i}; //changes column class to col-1 through col-5
              coord = `${row}${i}`;
              //key++;
              if(opponentShots.includes(coord)){
                if(taken.includes(coord)){
                  className += 'hit';
                } else {
                  className += 'missed';
                }
              }
              if(taken.includes(coord)){
                className += 'taken';
              }
              className += {rowClass};
              className += {colClass};// className looks like this: 'cell (shot) row-(a-e) col-(1-5)'
              <div key={coord} className={className}></div>;
            }
          })}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  game: state.game,
});

//Dispatch to Props?

export default connect(mapStateToProps)(Board);