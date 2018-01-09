import Vue from 'vue'
import Router from 'vue-router'
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
    path: '/zswloveljp/home',
    name: 'home',
    alias: ['/', '/zswloveljp'],
    component: Home
  },
  {
    path: '/zswloveljp/test',
    name: 'test',
    component: Test
  },
  {
    path: '/zswloveljp/toast',
    name: 'toast',
    component: Toast
  },
  {
    path: '/zswloveljp/calendar',
    name: '/zswloveljpcalendar',
    component: Calendar
  },
  {
    path: '/zswloveljp/calendarzijiayou',
    name: 'calendarzijiayou',
    component: Calendarzijiayou
  },
  {
    path: '/zswloveljp/pullup-import',
    name: 'pullupImport',
    component: pullupImport
  },
  {
    path: '/zswloveljp/action-sheet',
    name: 'actionSheet',
    component: actionSheet
  },
  {
    path: '/zswloveljp/swipe',
    name: 'swipe',
    component: swipe
  },
  {
    path: '/zswloveljp/mint-swipe',
    name: 'mintSwipe',
    component: mintSwipe
  },
  {
    path: '/zswloveljp/input-example',
    name: 'inputExample',
    component: inputExample
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
