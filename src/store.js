/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { forceReducerReload } from 'redux-injectors';
import thunk from 'redux-thunk'
import { logger } from './utils/logger'
import createReducer from './reducers';
import { Map } from "immutable";

export default function configureStore(initialState = Map()) {
    let composeEnhancers = compose;

    // If Redux Dev Tools is installed, enable it
    /* istanbul ignore next */
    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
        /* eslint-disable no-underscore-dangle */
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }


    const middlewares = [thunk, logger];

    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    const store = createStore(
        createReducer(),
        initialState,
        composeEnhancers(...enhancers)
    );

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            forceReducerReload(store);
        });
    }

    return store;
}