import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import News from './components/News'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h5 style={{marginBottom: 50}}>Welcome to Hactiv8 News Testing</h5>
        </div>
        <News />
      </div>
    );
  }
}

export default App;
