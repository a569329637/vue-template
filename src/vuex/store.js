import Vue from 'vue';
import Vuex from 'vuex';
import Menu from './Menu';
import User from './User';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    User,
    Menu,
  },
});

export default store;
