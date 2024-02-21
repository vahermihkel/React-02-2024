import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// Navigeerimiseks (route-ing)
// 1. installeerima react-router-dom mooduli (teek) node_modules kausta
// 2. impordime sealt kaustast BrowserRouter võimekuse
// 3. index.js failis ümbritseme <App/> tagi BrowserRouteriga
// 4. App.js failis URLi ja HTMLi seoseid

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
