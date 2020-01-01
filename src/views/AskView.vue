<template>
  <div>
    <div v-for="item in fetchedAsk" :key="item.id">
      
      <router-link :to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>

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
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>

</style>