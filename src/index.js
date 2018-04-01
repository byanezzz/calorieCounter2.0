import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store/configStore';
import { Provider } from 'react-redux'
import configInitial from './util/util';
import firebase  from 'firebase';

var config = {
    apiKey: "AIzaSyBjA-LfkcSNKTgjcpxuLDt1siKBURaiI2E",
    authDomain: "alpine-myth-132723.firebaseapp.com",
    databaseURL: "https://alpine-myth-132723.firebaseio.com",
    projectId: "alpine-myth-132723",
    storageBucket: "alpine-myth-132723.appspot.com",
    messagingSenderId: "407589511009"
};
firebase.initializeApp(config);

configInitial();

const store = configStore();


//const persistor =  persistStore(store);

ReactDOM.render(
  <Provider store = {store}>
    <App store ={store} firebase={firebase} /> 
  </Provider>, document.getElementById('root'));
  registerServiceWorker();