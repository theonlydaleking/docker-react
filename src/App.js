import React, { Component, lazy, Suspense } from 'react';
import AppProvider from './Context'
import logo from './logo.svg';
import './App.css';

// import Api from './Api' changes to:
const Api = lazy(() => import('./Api'))
const Cat = lazy(() => import('./Cat'))

// You then must wrap this component in a Suspense Component with a fallback (below)




class App extends Component {
  render() {
    return (
      <AppProvider>
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
      </AppProvider>
    );
  }
}

export default App;
