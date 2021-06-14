'use strict';
import VueRouter from 'vue-router';
import Home from "./Views/Home.vue";
import Create from "./Views/Create.vue";
import List from "./Views/List.vue";
const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/criar',name: 'Create', component: Create, props: true},
    {path: '/listar',name: 'List', component: List, props: true}
]

export const router = new VueRouter({
    mode: 'history',
    routes,
  });