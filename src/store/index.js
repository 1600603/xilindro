import { createStore, compose, applyMiddleware } from 'redux';
//import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
//import sagas from './sagas';

//import api from '../services/api'

const middlewares = [];

//const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

//const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

//middlewares.push(sagaMiddleware);

/* const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(...middlewares)); */

//const store = createStore(reducers, composer);
const store = createStore(reducers);

//sagaMiddleware.run(sagas);
/* 
api.interceptors.request.use(async config => {

    const {token} = store.getState().session;
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }); */

export default store;