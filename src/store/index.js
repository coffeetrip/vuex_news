import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './mutations.js';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    }
  },
  mutations, // mutations에서 state로
  // mutations: mutations
  actions,  // api꺼내와서 mutations으로
    
});