<template>
  <main>
    <CartHeader
      class="text-[40px] font-bold text-text flex justify-between items-center"
      :title="cartTitle"
    >
      <span class="right inline-block bg-[#E6EDEE] text-center rounded-full"
        ><Icon icon="ep:arrow-right" width="40" height="40" style="color: #020a4c"
      /></span>
      <span class="left inline-block bg-[#E6EDEE] text-center rounded-full"
        ><Icon icon="ep:arrow-left" width="40" height="40" style="color: #020a4c"
      /></span>
    </CartHeader>
    <slot />
  </main>
</template>

<script setup>
import CartHeader from './CartHeader.vue'
import { Icon } from '@iconify/vue'
defineProps({
  cartTitle: { type: String },
  cartImage: { type: String },
  title: { type: String },
  details: { type: String },
})
</script>

<style scoped></style>
