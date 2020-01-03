import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchAskInfo,
  fetchList
} from '../api/index.js';

export default {
  // promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then(response => {
  //       // console.log(response);
  //       context.commit('SET_NEWS', response.data);
  //       return response;
  //       // commit : mutations에 데이터 넘김
  //       // SET_NEWS를 시행, response.data를 넘김
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     });
  // },

  // async
  async FETCH_NEWS(context) {
    try {
      const response = await fetchNewsList();
      context.commit('SET_NEWS', response.data);
      return response;
    } catch(error) {
      console.log(error);
    }
  },
  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList()
  //     .then(({
  //       data
  //     }) => {
  //       commit('SET_JOBS', data);
  //     })
  //     .catch(error => console.log(error));
  // },
  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList();
      commit('SET_JOBS', response.data);
      return response;
    } catch(error) {
      console.log(error);
    }
  },
  // FETCH_ASK({ commit }) {
  //   return fetchAskList()
  //     .then(({ data }) => {
  //       commit('SET_ASK', data);
  //     })
  //     .catch(error => console.log(error));
  // },
  async FETCH_ASK({ commit }) {  // 예외처리는 api단에서
      const response = await fetchAskList();
      commit('SET_ASK', response.data);
      return response;
  },
  // FETCH_USER({ commit }, name) {  // name = userNmae
  //   return fetchUserInfo(name)
  //   .then(({ data }) => {
  //     commit('SET_USER', data);
  //   })
  //   .catch(error => console.log(error));
  // },
  async FETCH_USER(context, name) {
    const response = await fetchUserInfo(name);
    context.commit('SET_USER', response.data);
    return response;
  },
  // FETCH_ASKID({ commit }, id) {
  //   return fetchAskInfo(id)
  //   .then(({ data }) => {
  //     commit('SET_ASKID', data);
  //   })
  //   .catch(error => console.log(error));
  // },
  async FETCH_ASKID({ commit }, id) {
    try {
      const response = await fetchAskInfo(id);
      commit('SET_ASKID', response.data);
      return response;
    } catch(error) {
      console.log(error);
    }
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  }
}
