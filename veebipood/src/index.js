import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'; // siin saab midagi React Toastify sees üle kirjutada
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import kogusumma from './store/kogusumma'

// Navigeerimiseks (route-ing)
// 1. installeerima react-router-dom mooduli (teek) node_modules kausta
// 2. impordime sealt kaustast BrowserRouter võimekuse
// 3. index.js failis ümbritseme <App/> tagi BrowserRouteriga
// 4. App.js failis URLi ja HTMLi seoseid

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={kogusumma}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
