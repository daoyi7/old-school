import React from 'react'
import Welcome from 'container/welcome'
import Home from 'container/home'
import Root from 'container/root'

const routes = [
  {
    path: '/',
    component: Root,
    indexRoute: { component: Home },
    onEnter: (nextState, replaceState) => {
      if (nextState.location.pathname == '/') {
        replaceState('/index')
      }
    },
    childRoutes: [
      {
        path: 'index',
        component: Home
      },
      {
        path: 'welcome',
        component: Welcome
      }
    ]
  }
]

export default routes