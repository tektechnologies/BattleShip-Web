import React from 'react';
import { connect } from 'react-redux';
import * as listFetch from '../../actions/dashboard-actions';


class Dashboard extends React.Component{
  componentDidMount(){
    console.log('componentDidMount');
    this.props.listFetch();
  }

  render(){
    const { gamelist } = this.props;

    if(!gamelist){
      return (<h2>These are not the Droids you are looking for..</h2>
      );
    }

    return( 
      <React.Fragment>

        <h2>Welcome to BSD Dashboard!</h2>
        <img src="../../WhiteBoardPictures/Capture.PNG" alt="logo-bsd" height="300" width="300"></img>
        <div>
          {/* List of games */}
          <ul>
            {gamelist.map(games => (<li key={games._id}>{games.game}</li>))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  gamelist: state.gamelist,
});

const mapDispatchToProps = (dispatch) => ({
  gameList: () => dispatch(listFetch.gameList()),
});



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);