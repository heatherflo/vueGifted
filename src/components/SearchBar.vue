<template>
  <div class="SearchBar">
    <section class="row search-area">
      <div class="bg col-3">
        <h3 class="p-3">
          Gifted
        </h3>
        <div class="form-control">
          <form class="my-2">
            <input class=" mb-3" type="text" name="tag" placeholder="place tag here..." minlength="2" max="100">

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

      </div>
      <div class="col-9">
        <section class="row">
          <GiftBar :key="gift" />
        </section>
      </div>

    </section>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import GiftBar from './GiftBar.vue';

export default {
  setup() {
    return {};
  },
  components: { GiftBar }
};
</script>


<style lang="scss" scoped>
.bg {
  background-color: rgb(6, 138, 119);
  height: 100vh
}
</style>