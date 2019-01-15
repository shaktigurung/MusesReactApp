import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import indexReducers from './reducers/indexReducer';

export default function configureStore(initialState={}) {
 return createStore(
    indexReducers,
   applyMiddleware(thunk)
 );
}