<template>
  <div>
    <div>{{ askinfoInfo.title }}</div>
    <div>{{ askinfoInfo.content }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    askinfoInfo() {
      return this.$store.state.item;
    }
  },
  created() {
    console.log(this.$route.params.id);
    const itemid = this.$route.params.id;
    this.$store.dispatch('FETCH_ASKID', itemid);
  }
}
</script>

<style>

</style>