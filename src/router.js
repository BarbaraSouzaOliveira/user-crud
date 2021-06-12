'use strict';
import VueRouter from 'vue-router';
import Home from "./Views/Home.vue";
import Create from "./Views/Create.vue";
const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/criar',name: 'Create', component: Create}
]

export const router = new VueRouter({
    mode: 'history',
    routes,
  });