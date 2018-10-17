import React from 'react';
import {connect} from 'react-redux';

class Board extends React.Component{
  render(){
    let taken = [];
    this.props.shipStatuses.forEach(ship =>{
      ship.coordinates.forEach(coor =>{
        taken.push(coor);
      });
    });
    let userShots = this.props.userShots;
    let opponentShots = this.props.opponentShots;
    
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
              if(userShots.coord){
                className += 'hit'; //indicates the cell has been hit/missed by user
              } else if(userShots.coord === false){
                className += 'missed';
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
              if(opponentShots.coord){
                className += 'hit';
              } else if(opponentShots.coord === false) {
                className += 'missed';
              }             
              if(taken.includes(coord)){
                className += 'taken';
              }
              className += {rowClass};
              className += {colClass};// className looks like this: 'cell (taken, hit, missed) row-(a-e) col-(1-5)'
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