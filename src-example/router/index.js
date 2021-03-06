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
import wheel from '@/components/wheel'
import lazyLoad from '@/components/lazyLoad'
import range from '@/components/range'
import newCalendar from '@/components/new-calendar'

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
    name: 'calendar',
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
  },
  {
    path: '/zswloveljp/wheel',
    name: 'wheel',
    component: wheel
  },
  {
    path: '/zswloveljp/lazyLoad',
    name: 'lazyLoad',
    component: lazyLoad
  },
  {
    path: '/zswloveljp/range',
    name: 'range',
    component: range
  },
  {
    path: '/zswloveljp/new-calendar',
    name: 'newCalendar',
    component: newCalendar
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
