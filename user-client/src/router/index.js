import { createRouter, createWebHistory } from 'vue-router'
import UserListView from '../views/UserListView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import UserInsertView from '../views/UserInsertView.vue'
import UserUpdateView from '../views/UserUpdateView.vue'
import UserFormView from '../views/UserFormView.vue'

const routes = [
  {
    path: '/',
    name: 'userList',
    component: UserListView
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: UserInfoView
  },
  {
    path: '/userInsert',
    name: 'userInsert',
    component: UserInsertView
  },
  {
    path: '/userUpdate',
    name: 'userUpdate',
    component: UserUpdateView
  },
  { //등록&수정 (위에 거 남겨두려고 따로 다시 만든 거)
    path: '/userForm',
    name: 'userForm',
    component: UserFormView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
