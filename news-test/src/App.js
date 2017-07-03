import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from './components/Header'
import Content from './components/contents/Content'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Container text>
            <Content />
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
