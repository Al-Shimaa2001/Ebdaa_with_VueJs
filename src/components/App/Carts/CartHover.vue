<template>
  <div
    v-if="hoverCart"
    class="absolute top-44 bg-primary text-white text-2xl font-bold rounded-xl flex justify-center items-center gap-x-3 h-12 w-5/6"
    :class="{ 'opacity-100 visible cursor-pointer': hoverCart, 'opacity-0 invisible': !hoverCart }"
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
