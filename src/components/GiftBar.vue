<template>
  <div class="GiftBar col-4" v-for="gift in gifts">
    <GiftCard :giftProp="gift" />

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { giftedService } from '../services/GiftedService';
import GiftCard from './GiftCard.vue';

export default {
  setup() {
    onMounted(() => {
      giftedService.getGifts();
    });
    return {
      gifts: computed(() => AppState.gifts)
    };
  },
  components: { GiftCard }
};
</script>


<style lang="scss" scoped></style>