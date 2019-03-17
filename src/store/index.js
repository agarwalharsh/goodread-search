import { createStore, applyMiddleware } from 'redux';
import BooksReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from'./sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(BooksReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
