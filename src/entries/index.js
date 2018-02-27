import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import routes from './routes.js'
import store from './store.js'
import Root from 'container/root'

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}>
      {/* <Root /> */}
    </Router>
  </Provider>, document.getElementById('app'))