'use strict';
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {router} from './router.js';
import {store} from './store'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuetify);
new Vue({
  router,
  store,
  vuetify : new Vuetify(),
  render: h => h(App),
}).$mount('#app')
