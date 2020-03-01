import { PROD } from  './config';

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import { rootReducer } from './reducers';
import { middleware } from  './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store;

// Production
if (PROD) {
  store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  )
}

// Development
if (!PROD) {
  store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  )
}

export default store;


