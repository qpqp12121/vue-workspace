import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    //관련된 라우터 정보들 다 읽어들여 모든 컴포넌트들 준비시켜놓음(근데 너무 많으면 시작 더디니)
    component: HomeView //main에서 보통 사용(?)
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    //lazy-loaded: 그때 그때 요청될 때 해당 컴포넌트만 읽어들이는 방법
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
