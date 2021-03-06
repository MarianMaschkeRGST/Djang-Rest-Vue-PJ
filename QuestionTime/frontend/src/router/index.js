import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/question/:slug',
    name: 'question',
    // route level code-splitting
    // this generates a separate chunk (question-time.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "question" */ '../views/Question.vue'),
    props: true
  },
  {
    // Question mark makes parameter optional
    path: '/ask/:slug?',
    name: 'question-editor',
    component: () => import(/* webpackChunkName: "question-editor" */ '../views/QuestionEditor.vue'),
    props: true
  },
  {
    path: '/answer/:uuid',
    name: 'answer-editor',
    component: () => import(/* webpackChunkName: "answer-editor" */ '../views/AnswerEditor.vue'),
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'page-not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue'),
  },
 // Example creation of a new page:
 // Imagine the routes constant to be the relay station, way pointer
 // Target new page with router-link using name property
 // Path property is what will be added to the url
 // Component is the template used
  // {
  //   path: '/new-one',
  //   name: 'home-two',
  //   component: Home
  // },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router
