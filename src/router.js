import Vue from 'vue'
import Router from 'vue-router'
import IdulFitri from './components/IdulFitri.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IdulFitri',
      component: IdulFitri
    }
  ]
})
