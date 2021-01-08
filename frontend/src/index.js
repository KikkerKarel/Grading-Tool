import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";

//axios.defaults.baseURL = "http://gradest-api.v99.nl/";
axios.defaults.baseURL = "http://localhost:8080/";
axios.interceptors.request.use(function (config) {
    config.headers.Authorization =  localStorage.getItem("token");

    return config;
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();