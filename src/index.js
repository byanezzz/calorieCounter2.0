import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store/configStore';
import { Provider } from 'react-redux'
import configInitial from './util/util';

configInitial();

const store = configStore();


//const persistor =  persistStore(store);

ReactDOM.render(
  <Provider store = {store}>
    <App store ={store}/> 
  </Provider>, document.getElementById('root'));
  registerServiceWorker();