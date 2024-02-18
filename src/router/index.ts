import { createRouter, createWebHistory } from 'vue-router'
import Notice from '../views/Notice.vue'
import Attendance from '../views/Attendance.vue'
import Assignment from '../views/Assignment.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Notice
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: Attendance
    },
    {
      path: '/task',
      name: 'task',
      component: Assignment
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
