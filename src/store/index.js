import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let store;

export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk, logger));

  return store;
}
