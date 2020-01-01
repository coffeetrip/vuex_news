import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList
} from '../api/index.js';

export default {
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
        });
    },
    FETCH_JOBS({
      commit
    }) {
      fetchJobsList()
        .then(({
          data
        }) => {
          commit('SET_JOBS', data);
        })
        .catch(error => console.log(error));
    },
    FETCH_ASK({
      commit
    }) {
      fetchAskList()
        .then(({
          data
        }) => {
          commit('SET_ASK', data);
        })
        .catch(error => console.log(error));
    },
  }