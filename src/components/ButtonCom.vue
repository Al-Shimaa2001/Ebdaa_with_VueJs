<template>
  <div>
    <button class="bg-primary border rounded-xl p-2 text-primary">
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
