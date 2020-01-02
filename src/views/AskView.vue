<template>
  <div>
    <!-- AskView.vue는 필요없음 -->
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post"> -->
        <!-- 포인트 영역 -->
        <!-- <div class="points">
          {{ item.points }}
        </div> -->
        <!-- 기타 정보 영역 -->
        <!-- <div>
          <p class="news-title">
            <router-link :to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div> 
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import bus from '../utiles/bus.js';
import ListMixin from '../mixins/ListMixin.js';
// import { mapGetters } from 'vuex';

export default {
  components: {
    ListItem
  },
  // mounted() {
  //   bus.$emit('end:spinner');
  // }
  mixins: [ListMixin],
  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //       this.$store.dispatch('FETCH_ASK')
  //       .then(() => {
  //         console.log('fetched');
  //         bus.$emit('end:spinner');
  //       })
  //       .catch(error => console.log(error));
  //   }, 3000);
  // }
  
//   computed: {
//     ...mapGetters([
//       'fetchedAsk'
//     ]),
//   },
//   created() {
//     this.$store.dispatch('FETCH_ASK')
//   }
}
</script>