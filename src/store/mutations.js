export default {
  SET_NEWS(state, news) { // news = response.data
    state.news = news;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_ASK(state, ask) {
    state.ask = ask;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_ASKID(state, item) {
    state.item = item;
  },
  SET_LIST(state, list) {
    state.list = list;
  }
}