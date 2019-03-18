import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import About from './pages/about'
import CreateNote from './pages/create-note'

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'create',
        path: '/create-note',
        component: CreateNote
      },
      {
        name: 'home',
        path: '/:lang?',
        component: Home
      }
    ]
  })
}
