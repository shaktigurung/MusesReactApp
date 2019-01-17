import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import indexReducers from './reducers/indexReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState={}) {
  return createStore(
      indexReducers,
    composeEnhancers(applyMiddleware(thunk))
  );
}