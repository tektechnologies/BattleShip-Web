import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './components/auth';
import './styles/reset.css';
import { Provider } from 'react-redux';
import storeFactory from './lib/store';
import Home from './home/home';
import Nav from './header/nav';
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
              <div>
                <Route exact path='/auth/:type' component={Auth}/>
              </div>
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
