import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Auth from './Auth';

let applicationState = {
  auth: new Auth()
};

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App {...applicationState} />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
