import React from 'react';

export default class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      x : [{
        //  what goes Here
      }],
      error:null,
    };
  }

  render(){
    return(
      <React.Fragment>
        <h2>Game Time...</h2>
        <div>
          {/* input rendered */}
          {/* board render */}
        </div>
      </React.Fragment>
    );
  }

}