import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: []
  },
  mutations: {  // mutations에서 state로
    SET_NEWS(state, news) { // news = response.data
      state.news = news;
    }
  },
  actions: {  // api꺼내와서 mutations으로
    FETCH_NEWS(context) {
      fetchNewsList()
      .then(response => {
        console.log(response);
        context.commit('SET_NEWS', response.data); 
        // commit : mutations에 데이터 넘김
        // SET_NEWS를 시행, response.data를 넘김

      })
      .catch(error => {
        console.log(error)
      })
    }
  }
});