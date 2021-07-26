import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Battle from './component/battle';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="links">
        <a href="/">Popular</a>
        <a href="/battle">Battle</a>
      </div>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/battle">
        <Battle />
      </Route>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
