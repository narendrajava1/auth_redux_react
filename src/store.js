import { thunk } from 'redux-thunk';
import rootReducers from './reducers';
import { applyMiddleware, createStore } from 'redux';

export const store = createStore(rootReducers,applyMiddleware(thunk))
export default store;