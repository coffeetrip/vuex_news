import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList
} from '../api/index.js'

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        console.log(response);
        // action -> commit -> mutations
        context.commit('SET_NEWS', response.data); // mutations에 데이터 넘기기위해 사용
      })
      .catch(error => {
        console.log(error);
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
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ASKS({
    commit
  }) {
    fetchAskList()
      .then(({
        data
      }) => {
        commit('SET_ASKS', data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}