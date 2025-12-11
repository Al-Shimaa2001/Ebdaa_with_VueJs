<template>
  <div
    class="absolute top-44 bg-primary text-white rounded-xl flex justify-center items-center h-12 w-5/6"
    :class="{ 'opacity-100 visible': hoverCart, 'opacity-0 invisible': !hoverCart }"
  >
    <Icon icon="uil:cart" width="24" height="24" style="color: #ffffff" />
    <p>اضف للسله</p>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  hoverCart: { type: Boolean },
})
</script>

<style scoped></style>
