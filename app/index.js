import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import App from './containers/App'

import configureStore from './store/configureStore'

import { $logProvider } from './services/log'

$logProvider.debugEnabled(false)
$logProvider.debugEnabled(true)


//require('./bootstrap.config.js')

const store = configureStore()

render (
  <div> 
    <Provider store={store}>
      <App />
    </Provider> 
  </div>,
  document.getElementById('app')
)

