import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';

const logger = createLogger();
const middleware = [logger];

export default function configStore(initialState) {
    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(...middleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )
}