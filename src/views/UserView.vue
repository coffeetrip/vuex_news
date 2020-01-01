<template>
  <div>
    <div>
      name : {{ userInfo.id }}
    </div>
    <div>
      karma : {{ userInfo.karma }}
    </div>
    <div>
      created : {{ userInfo.created }}
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    console.log(this.$route.params.id);
    const userName = this.$route.params.id;
    // axios.get(`http://api.hnpwa.com/v0/user/${userName}.json`)
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>