import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchAskInfo,
  fetchList
} from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    return fetchNewsList()
      .then(response => {
        // console.log(response);
        context.commit('SET_NEWS', response.data);
        return response;
        // commit : mutations에 데이터 넘김
        // SET_NEWS를 시행, response.data를 넘김
      })
      .catch(error => {
        console.log(error)
      });
  },
  FETCH_JOBS({ commit }) {
    return fetchJobsList()
      .then(({
        data
      }) => {
        commit('SET_JOBS', data);
      })
      .catch(error => console.log(error));
  },
  FETCH_ASK({ commit }) {
    return fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(error => console.log(error));
  },
  FETCH_USER({ commit }, name) {  // name = userNmae
    return fetchUserInfo(name)
    .then(({ data }) => {
      commit('SET_USER', data);
    })
    .catch(error => console.log(error));
  },
  FETCH_ASKID({ commit }, id) {
    return fetchAskInfo(id)
    .then(({ data }) => {
      commit('SET_ASKID', data);
    })
    .catch(error => console.log(error));
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
    .then(response => {
      commit('SET_LIST', response.data);
      return response;
    })
    .catch(error => console.log(error));
  }
}
