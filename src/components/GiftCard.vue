<template>
  <div class="GiftCard">
    <div class="gift-card rounded text-dark selectable" @click="openGift()" role="button">
      <img :src="giftProp.url" :alt="giftProp.tag">
      <p>{{ giftProp.tag }}</p>
    </div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Gift } from '../models/Gift';
import { giftedService } from '../services/GiftedService.js'
export default {
  props: { giftProp: { type: Gift } },
  setup(props) {
    return {
      openGift() {
        giftedService.openGift(props.giftProp.id)
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.gift-card {
  border: 1px solid var(--bs-primary);
  border-radius: 8px;

  img {
    width: 100%;

  }
}
</style>