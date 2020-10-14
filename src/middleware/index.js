import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import apiMiddleware from './api.middleware';
import { applyMiddleware } from 'redux';

const loggerMiddleware = createLogger();

export default applyMiddleware(
    apiMiddleware,
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
);
