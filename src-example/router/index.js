import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Test from '@/components/test'
import Toast from '@/components/Toast'
import Calendar from '@/components/calendar'
import Calendarzijiayou from '@/components/calendarzijiayou'
import Pullup from '@/components/Pullup'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'Hello',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/toast',
    name: 'toast',
    component: Toast
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/calendarzijiayou',
    name: 'calendarzijiayou',
    component: Calendarzijiayou
  },
  {
    path: '/Pullup',
    name: 'Pullup',
    component: Pullup
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
