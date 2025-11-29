<template>
  <div>
    <button
      class="bg-primary border rounded-xl p-2 text-secondary text-3xl font-bold w-[222px] h-[76px]"
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
