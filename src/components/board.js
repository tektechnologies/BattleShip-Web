import React from 'react';

export default class Board extends React.Component{
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
    let tCells = [];
    let bCells = [];
    rows.forEach(row =>{
      let rowClass = ' row-'; //base row class for css grid
      rowClass += {row}; //changes row class to row-a through row-e
      //let coord; //sets default coord class
      for(let i = 1; i < 6; i++){
        let colClass = ' col-'; //base column class for css grid
        let className = 'cell '; //base className for all cells
        colClass += {i}; //changes column class to col-1 through col-5
        //coord = `${row}${i}`; //changes coordinate based on cell instance
        //key++; //key for divs (May or may not be neccessary)
        if(userShots.coord){
          className += 'hit'; //indicates the cell has been hit/missed by user
        } else if(userShots.coord === false){
          className += 'missed';
        }
        className += {rowClass};
        className += {colClass};// className looks like this: 'cell (shot) row-(a-e) col-(1-5)'
        tCells.push(className);
      }
    });
    {rows.forEach(row =>{
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
        bCells.push(className);
      }
    });
    }
    return(
      <React.Fragment>
        <label className='toggle'>
          <input type='checkbox' />
          <span className='knob'></span>
        </label>
        <div className='tBoard'>
          {tCells.map((cell,i) =>
            <div key={i} className={cell}></div>
          )
          }
        </div>
        <div className='bBoard'>
          {bCells.map((cell, i) =>
            <div key={i} className={cell}></div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
