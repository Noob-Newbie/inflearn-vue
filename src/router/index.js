import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/basic/HomeView.vue'
// import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/basic/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/basic/ContactView.vue')
  },
  {
    path: '/basic',
    name: 'basic',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/basic/BasicView.vue')
  },
  {
    path: '/DataBinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "contact" */ '../views/basic/DataBinding.vue')
  },
  {
    path: '/DataBindingInputText',
    name: 'DataBindingInputText',
    component: () => import(/* webpackChunkName: "contact" */ '../views/basic/DataBindingInputText.vue')
  },
  {
    path: '/ListBinding',
    name: 'ListBinding',
    component: () => import(/* webpackChunkName: "contact" */ '../views/basic/ListBinding.vue')
  },
  {
    path: '/RenderingView',
    name: 'RenderingView',
    component: () => import(/* webpackChunkName: "contact" */ '../views/basic/RenderingView.vue')
  },
  {
    path: '/CounterView',
    name: 'CounterView',
    component: () => import(/* webpackChunkName: "contact" */ '../views/basic/CounterView.vue')
  },
  {
    path: '/ComputedView',
    name: 'ComputedView',
    component: () => import(/* webpackChunkName: "contact" */ '../views/basic/ComputedView.vue')
  },
  {
    path: '/WatchView',
    name: 'WatchView',
    component: () => import(/* webpackChunkName: "contact" */ '../views/basic/WatchView.vue')
  },
  {
    path: '/SearchView',
    name: 'SearchView',
    component: () => import(/* webpackChunkName: "contact" */ '../views/basic/SearchView.vue')
  },
  {
    path: '/InsertView',
    name: 'InsertView',
    component: () => import(/* webpackChunkName: "contact" */ '../views/basic/InsertView.vue')
  },
  {
    path: '/ServerData',
    name: 'ServerData',
    component: () => import(/* webpackChunkName: "contact" */ '../views/basic/ServerData.vue')
  },
  {
    path: '/AdvancedExample',
    name: 'AdvancedExample',
    component: () => import(/* webpackChunkName: "contact" */ '../views/advanced/AdvancedExample.vue')
  },
  {
    path: '/MixinTest',
    name: 'MixinTest',
    component: () => import(/* webpackChunkName: "contact" */ '../views/advanced/MixinTest.vue')
  },
  {
    path: '/CompositionAPI',
    name: '/CompositionAPI',
    component: () => import('../views/composition/CompositionAPI.vue')
  },
  {
    path: '/CompositionAPI2',
    name: '/CompositionAPI2',
    component: () => import('../views/composition/CompositionAPI2.vue')
  },
  {
    path: '/CompositionAPI3',
    name: '/CompositionAPI3',
    component: () => import('../views/composition/CompositionAPI3.vue')
  },
  {
    path: '/CompositionAPI4',
    name: '/CompositionAPI4',
    component: () => import('../views/composition/CompositionAPI3.vue')
  },
  {
    path: '/CompositionAPIProvide',
    name: '/CompositionAPIProvide',
    component: () => import('../views/composition/CompositionAPIProvide.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
