
// index

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

//    store = Redux(./reducers)

//    React-Dom(
//      <React-Redux store={store}>
//        <App />
//      </React-Redux>,
//      document.getElementById('root')
//    )

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
