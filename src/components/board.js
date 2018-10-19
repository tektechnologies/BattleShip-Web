import React from 'react';
import './styles/board.css';
let rows = ['a', 'b', 'c', 'd', 'e'];

export default class Board extends React.Component{

  generateClassNames = (shots, taken) =>{ //takes in only the user or opponentShots
    let array = []; //array of classNames to give each cell
    rows.forEach(row =>{
      let rowClass = ' row-'; //base row class for css grid
      rowClass += row; //changes row class to row-a through row-e
      let coord; //sets default coord class
      for(let i = 1; i < 6; i++){
        let colClass = ' col-'; //base column class for css grid
        let className = 'cell '; //base className for all cells
        colClass += i.toString(); //changes column class to col-1 through col-5
        coord = `${row}${i}`; //changes coordinate based on cell instance
        //key++; //key for divs (May or may not be neccessary)
        if(shots[coord]){
          className += 'hit'; //indicates the cell has been hit/missed by user
        } else if(shots[coord] === false){
          className += 'missed';
        }
        if(taken && taken.includes(coord)){
          className += ' taken';
        }
        className += rowClass;
        className += colClass;// className looks like this: 'cell (taken, hit, missed) row-(a-e) col-(1-5)'
        array.push(className);
      }
    });
    return array;
  };

  render(){
    let taken = [];
    this.props.shipStatuses.forEach(ship =>{
      ship.coordinates.forEach(coor =>{
        taken.push(coor);
      });
    });
    let userShots = this.props.userShots;
    let opponentShots = this.props.opponentShots;
    return(
      <React.Fragment>

        <input type='checkbox' />
        <span>Toggle Board View</span>

        <div className='userViewofOpponentBoard'>
          {this.generateClassNames(userShots).map((name,i) =>{
            let mod = Math.floor(i / 5);
            let letter = String.fromCharCode(97 + mod);
            let number = ((i + 1 + mod) % 6).toString();
            return <div key={i} className={name}>{letter}{number}</div>;
          }
          )}
        </div>
        <div className='userPlacementBoard'>
          {this.generateClassNames(opponentShots, taken).map((name, i) =>{
            let mod = Math.floor(i / 5);
            let letter = String.fromCharCode(97 + mod);
            let number = ((i + 1 + mod) % 6).toString();
            return <div key={i} className={name}>{letter}{number}</div>;
          }
          )}
        </div>
      </React.Fragment>
    );
  }
}
