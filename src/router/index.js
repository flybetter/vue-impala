import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Demo from '../components/Demo'
import first from '../components/first'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/demo',
      name: 'demo',
      component: Demo
    }, {
      path: '/first',
      name: 'first',
      component: first
    }, {
      path: '*',
      redirect: '/first'
    }
  ]
})
