import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
