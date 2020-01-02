<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" :key="job.id" class="post"> -->
        <!-- 포인트 영역 -->
        <!-- <div class="points">
          {{ job.points || 0 }}
        </div> -->
        <!-- 기타 정보 영역 -->
        <!-- <div>
          <p class="news-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by 
            <a :herf="job.url">{{ job.domain }}</a>
          </small>
        </div> 
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem,
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>
