<template>
  <div>
    <div v-for="item in this.$store.state.news" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{item.time_ago}} by {{ item.user }}</small>
    </div>
  </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js';

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  //   console.log('호출 전: ', this);

  //   fetchNewsList()
  //   .then(response => {
  //     console.log('호출 후: ', this);
  //     this.users = response.data;
  //   })
  //   .catch(function(error) {
  //     console.log(error)
  //   })
  },
}
</script>

<style>

</style>