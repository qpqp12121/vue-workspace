import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import DataBinding from '../views/DataBinding.vue'
//import DataBinding from '../views/DataBinding2.vue'
//import DataBinding from '../views/DataBinding3.vue'
//import DataBinding from '../views/DataBinding4.vue'
//import DataBinding from '../views/DataBindingList.vue'
// import DataBinding from '../views/EventClick.vue'
// import DataBinding from '../views/EventTodo.vue'
import DataBinding from '../views/ComputedView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/binding',
    name: 'binding', //지금은 경로로 했는데 나중엔 이름으로도 routing 경로설정할 수 있어 쓰여짐
    component: DataBinding //만들어서 추가해 줘야 됨
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
