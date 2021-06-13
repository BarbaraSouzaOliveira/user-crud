import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    getUser: state => {
      return state.users
    }
  },
  mutations: {
    addUsers(state, user) {
      state.users.push(user);
      console.log(state.users)
    }
  },
})