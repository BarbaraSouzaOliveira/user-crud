'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from 'vue-router';
import {router} from './router.js';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(Vuex);
new Vue({
  router,
  vuetify : new Vuetify(),
  render: h => h(App),
}).$mount('#app')
