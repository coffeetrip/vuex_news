<template>
  <div>
    <!-- NewView.vue는 필요없음 -->
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import bus from '../utiles/bus.js';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_NEWS')
  //       .then(() => {
  //         console.log('fetched');
  //         bus.$emit('end:spinner');
  //       })
  //       .catch((error) => console.log(error));
  //   }, 3000);
  // }
}
</script>