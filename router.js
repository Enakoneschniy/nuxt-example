import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import About from './pages/about'

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'about',
        path: '/:lang?/about/:test?',
        component: About
      },
      {
        name: 'home',
        path: '/:lang?',
        component: Home
      }
    ]
  })
}
