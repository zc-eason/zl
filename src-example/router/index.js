import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Test from '@/components/test'
import Toast from '@/components/Toast'
import Calendar from '@/components/calendar'
import Calendarzijiayou from '@/components/calendarzijiayou'
import pullupImport from '@/components/pullup-import'
import actionSheet from '@/components/action-sheet'
import swipe from '@/components/swipe'
import mintSwipe from '@/components/mint-swipe'
import inputExample from '@/components/wk-input-example'

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
    path: '/pullup-import',
    name: 'pullupImport',
    component: pullupImport
  },
  {
    path: '/action-sheet',
    name: 'actionSheet',
    component: actionSheet
  },
  {
    path: '/swipe',
    name: 'swipe',
    component: swipe
  },
  {
    path: '/mint-swipe',
    name: 'mintSwipe',
    component: mintSwipe
  },
  {
    path: '/input-example',
    name: 'inputExample',
    component: inputExample
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
