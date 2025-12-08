<template>
  <div class="relative shadow-2xl md:w-72 h-11/12 p-3 rounded-2xl">
    <CartImage :src="srcImage" />
    <CartContent :title="title" :details="details" />
    <CartFooter salary="49.49 ر.س" />
  </div>
</template>

<script setup>
import CartContent from './CartContent.vue'
import CartFooter from './CartFooter.vue'
import CartImage from './CartImage.vue'

defineProps({
  srcImage: { type: String },
  title: { type: String },
  details: { type: String },
  carts: { type: Array },
})
</script>

<style scoped></style>
