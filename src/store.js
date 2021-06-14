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
    },
  },
  mutations: {
    addUsers(state, user) {
      state.users.push(user);
      console.log(state.users);
    },
    removeUserByIndex(state,index){
      state.users.splice(index, 1);
      console.log(state.users);
    },
    editUserByIndex(state,user){
      state.users[user.index] = user.user;
      console.log(state.users);
    },
  },
})