import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Home from '@/components/Home'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Submit from '@/components/Submit'
import Comments from '@/components/Comments'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home/:type?',
      name: 'Home',
      component: Home,
      // Too much recursion?
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/submit/:type',
      name: 'Submit',
      component: Submit,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/comments/:id',
      name: 'Comments',
      component: Comments,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router

