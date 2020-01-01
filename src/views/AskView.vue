<template>
  <div>
    <div v-for="item in fetchedAsk" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';


export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ]),
    // ...mapGetters({
    //   askItems: 'fetchedAsk'
    // }),
    // 2
    // ...mapState({
    //   fetchedask: state => state.ask
    // })

    // 1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>

</style>