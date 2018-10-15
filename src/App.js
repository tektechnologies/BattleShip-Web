import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Auth from './components/auth';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import storeFactory from './lib/store';
const store = storeFactory();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <p>
            Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
            Learn React
              </a>
            </header>
            <div>
              <Route exact path='/auth/:type' component={Auth}/>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
