import React from 'react';

import logo from '../logo.svg';
import '../App.css';

const Header = () => {
  return(
    <div className="App-header" style={{display:'flex', color:'white'}}>
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Welcome To News Test</h3>
    </div>
  )
}

export default Header;
