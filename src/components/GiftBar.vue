<template>
  <div class="GiftBar col-9">
    <div>

    </div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { giftedService } from '../services/GiftedService';

export default {
  setup() {

    onMounted(() => {
      giftedService.getGifts()
    })

    return {

    }
  }
};
</script>


<style lang="scss" scoped></style>