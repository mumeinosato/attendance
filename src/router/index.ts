import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
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
      component: Notice,
      meta: { requiresAuth: true }
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: Attendance,
      meta: { requiresAuth: true }
    },
    {
      path: '/task',
      name: 'task',
      component: Assignment,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: { requiresAuth: false }
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
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isLoggedIn = store.state.isLoggedIN;
  if (requiresAuth && !isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
