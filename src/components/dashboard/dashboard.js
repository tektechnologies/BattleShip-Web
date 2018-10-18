import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/dashboard-actions';


class Dashboard extends React.Component{
  componentDidMount(){
    console.log('componentDidMount');
    this.props.listFetch();
  }

  render(){
    const { gameList } = this.props;

    if(!gameList){
      return (<h2>These are not the Droids you are looking for..</h2>
      );
    }

    return( 
      <React.Fragment>
        <h2>Welcome to BSD Dashboard!</h2>
        <img src="../../WhiteBoardPictures/Capture.PNG" alt="logo-bsd" height="300" width="300"></img>
        <div>
          <ul>
            {gameList.map(games => (<li key={games.id}>Game with: {games.players[0]}  Current game phase: {games.phase} <button value={games.id} onClick={this.redirect}>Join Game</button></li>))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  gameList: state.gameList,
});

const mapDispatchToProps = (dispatch) => ({
  listFetch: () => dispatch(actions.listFetch()),
});



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);