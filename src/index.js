import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import configStore from './store/configStore';
import { Provider } from 'react-redux'
import {persistStore} from 'redux-persist'


const store = configStore();


//const persistor =  persistStore(store);

ReactDOM.render(<Provider store={store} >
    <App store={store}/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
