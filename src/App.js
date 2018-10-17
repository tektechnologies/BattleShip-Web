import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Auth from './components/auth';
import './styles/reset.css';
import './styles/app.css';
import { Provider } from 'react-redux';
import storeFactory from './lib/store';
import Home from './components/home/home';
import Nav from './components/header/nav';
import CreateGame from './components/create-game/create-game';
import DashBoard from './components/dashboard/dashboard';
const store = storeFactory();



class App extends Component {
  render() {
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

              <div>
                <Route exact path='/auth/:type' component={Auth}/>
              </div>
            </main>
            <footer>
              &copy; DeltaV
              <Link to='/'>About Us</Link>
            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
