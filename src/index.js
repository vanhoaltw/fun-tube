import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './asset/style/index.scss'
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
