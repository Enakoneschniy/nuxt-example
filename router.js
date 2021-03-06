import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import Trash from './pages/trash'
import Search from './pages/search'
import CreateNote from './pages/create-note'
import EditNote from './pages/edit-note'

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
        name: 'edit',
        path: '/edit-note/:id',
        component: EditNote
      },
      {
        name: 'trash',
        path: '/trash',
        component: Trash
      },
      {
        name: 'search',
        path: '/search',
        component: Search
      },
      {
        name: 'home',
        path: '/',
        component: Home
      }
    ]
  })
}
