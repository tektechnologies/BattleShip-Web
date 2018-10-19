import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/dashboard-actions';
import './dashboard.css';

class Dashboard extends React.Component{
  redirect = (e) => {
    let id = e.target.value;
    this.props.history.push(`/game/${id}`);
  }

  componentDidMount(){
    this.props.listFetch();
    this.fetchInterval = setInterval(()=>{
      this.props.listFetch();}
    ,30000);
  }

  componentWillUnmount(){
    clearInterval(this.fetchInterval);
  }

  render(){
    const { gameList } = this.props;

    if(!gameList){
      return (<h2>These are not the Droids you are looking for..</h2>
      );
    }

    return( 
      <React.Fragment>
      
         
        <h2>Join a Game!</h2>
        <div>
        
          <ul>
            {gameList.map(games =>
              (<li key={games.id}>Game with: {games.players[0]}|
              Current game phase: {games.phase}  
              <button className="dashButton" value={games.id} onClick={this.redirect}>Join Game</button>
              </li>
              ))}
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



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));