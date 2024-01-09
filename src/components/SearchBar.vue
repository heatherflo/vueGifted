<template>
  <div class="SearchBar">
    <section class="row search-area">
      <div class="bg col-3">
        <h3 class="p-3">
          Gifted
        </h3>
        <form class="my-2 form-control">
          <input class="mb-3" type="text" name="tag" placeholder="place tag here..." minlength="2" max="100">

          <input type="text" name="tag" placeholder="place URL here..." minlength="2" max="100">
          <button class="mt-3">submit</button>
        </form>
        <hr class="line">
        <form>
          <p>Search GIFs</p>
          <input type="text" name="tag" minlength="2" max="100">
          <button class="mb-3"><i class="mdi mdi-magnify"></i></button>
        </form>

      </div>

    </section>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
export default {
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>
.bg {
  background-color: rgb(6, 138, 119);
  background-size: cover;
}
</style>