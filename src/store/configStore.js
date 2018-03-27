import { createStore, compose } from 'redux';
import reducers from '../reducers';

export default function configStore(initialState) {
    return createStore(
        reducers,
        compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )
}