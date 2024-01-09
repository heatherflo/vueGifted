<template>
  <div class="home bg container-fluid">
    <SearchBar />

  </div>
</template>

<script>

import SearchBar from '../components/SearchBar.vue';

export default {
  setup() {
    return {};
  },
  components: { SearchBar }
}
</script>

<style scoped lang="scss">
.bg {
  background-color: rgb(233, 241, 240);
  min-height: 100vh;
}
</style>
