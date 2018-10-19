import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import * as authActions from './actions/auth-actions';
import './styles/reset.css';
import './styles/app.css';
import { Provider } from 'react-redux';
import storeFactory from './lib/store';
import Home from './components/home/home';
import Nav from './components/header/nav';
import CreateGame from './components/create-game/create-game';
import DashBoard from './components/dashboard/dashboard';
import GameContainer from './components/gameContainer';
import About from './components/about/about';
const store = storeFactory();
store.dispatch(authActions.tokenFromCookie());


class App extends Component {
  render() {
    console.log(store.getState());
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Nav/>
            <main className="layout">
              <Route exact path='/'
                component={Home} />

              <Route exact path='/creategame'
                component={CreateGame} />

              <Route exact path='/dashboard'
                component={DashBoard} />

              <Route exact path='/about'
                component={About} />

              <div>
                <Route exact path='/game/:id' component={GameContainer} />
              </div>
            </main>
            <footer>
              &copy; DeltaV
              <Link to='/about'>About Us</Link>
            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
