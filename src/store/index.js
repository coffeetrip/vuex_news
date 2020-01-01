import Vue from 'vue'
import Vuex from 'vuex'
// import {
//   fetchNewsList,
//   fetchJobsList, fetchAskList
// } from '../api/index.js'
import mutations from './mutatiions.js';
import actions from './actions.js';



// vuex는 상태관리 도구
// 상태는 여러 컴포넌트간의 공유되는 데이터 속성
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {  // state -> NewsView
    news: [],
    jobs: [],
    asks: [],
  },
  getters: {  //computed와 비슷한 속성
    fetchedask(state) {
      return state.asks;
    }
  },
  mutations, // mutations: mutations
  // mutations: {  // mutations -> state
  //   SET_NEWS(state, news) {  // response.data = news
  //     state.news = news;
  //   },
  //   SET_JOBS(state, jobs) {
  //     state.jobs = jobs;
  //   },
  //   SET_ASKS(state, asks) {
  //     state.asks = asks;
  //   }
  // },
  actions, // actions: acionts
  // actions: {
  //   FETCH_NEWS(context) {
  //     fetchNewsList()
  //     .then(response => {
  //       console.log(response);
  //       // action -> commit -> mutations
  //       context.commit('SET_NEWS', response.data);  // mutations에 데이터 넘기기위해 사용
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   },
  //   FETCH_JOBS({ commit }) {
  //     fetchJobsList()
  //     .then(({ data }) => {
  //       commit('SET_JOBS', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   },
  //   FETCH_ASKS({ commit }) {
  //     fetchAskList()
  //     .then(({ data }) => {
  //       commit('SET_ASKS', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   }
  // }
});
