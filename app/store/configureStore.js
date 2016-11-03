import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../reducers'
import { logger } from './extra/logger' 
import thunk from './extra/redux-thunk' 

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer, 
    initialState,
    applyMiddleware(thunk, logger))

  /*if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }*/

  return store
}