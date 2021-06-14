'use strict';
import VueRouter from 'vue-router';
import Home from "./Views/Home.vue";
import Create from "./Views/Create.vue";
import List from "./Views/List.vue";
import NotFound from "./Views/NotFound.vue"
const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/criar',name: 'Create', component: Create, props: true},
    {path: '/listar',name: 'List', component: List, props: true},
    {path: '*', component: NotFound},
]

export const router = new VueRouter({
    mode: 'history',
    routes,
  });