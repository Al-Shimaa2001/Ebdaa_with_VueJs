<template>
  <div>
    <button
      class="bg-primary border rounded-xl p-3 md:p-2 text-secondary text-2xl md:text-3xl font-bold md:w-[222px] md:h-[70px]"
    >
      {{ btnTitle }}
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  btnTitle: { type: String },
})
</script>

<style scoped></style>
