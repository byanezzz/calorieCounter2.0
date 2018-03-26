import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';

export default function configStore(initialState) {
    return createStore(
        reducers,
        compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )
}