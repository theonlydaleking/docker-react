import React, { Component, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

// import Api from './Api'
const Api = lazy(() => import('./Api'))
const Cat = lazy(() => import('./Cat'))


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Testing a change
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Suspense fallback={<div className="">...Loading</div>}>
            <Cat />
            <Api />

          </Suspense>

        </header>

      </div>

    );
  }
}

export default App;
