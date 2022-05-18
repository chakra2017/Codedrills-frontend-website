import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import first_prob from '../views/first_prob.vue'
import second_prob from '../views/second_prob.vue'
import third_prob from '../views/third_prob.vue'
import fourth_prob from '../views/fourth_prob.vue'
import fifth_prob from '../views/fifth_prob.vue'
import codemirror from '../views/codemirror.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path: '/first',
    name: 'first',
    component:codemirror
  },
  {
    path: '/second',
    name: 'second',
    component:second_prob
  },
  {
    path: '/third',
    name: 'third',
    component:third_prob
  },
  {
    path: '/fourth',
    name: 'fourth',
    component:fourth_prob
  },
  {
    path: '/fifth',
    name: 'fifth',
    component:fifth_prob
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
