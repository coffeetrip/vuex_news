<template>
  <div>
    <!-- <div v-for="ask in this.$store.state.asks" :key="ask.id">{{ask.title}}</div> -->
    <!-- <div v-for="ask in asksItems" :key="ask.id">{{ask.title}}</div> -->
    <div v-for="ask in fetchedask" :key="ask.id">
      <a :href="ask.url">{{ ask.title }}</a>
      <small>
        {{ ask.time_ago }} by {{ ask.user }}</small>
    </div>
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  computed: {
    // ...mapGetters({
    //   asksItems: 'fetchedask'  // 변수 : '속성'
    // }),
    ...mapGetters([
      'fetchedask'
    ]),

    // 2. 
    // ...mapState({
   //   asks: state => state.asks
   // }),

    // 1.
    // asks() {
    //   return this.$store.state.asks;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style>

</style>