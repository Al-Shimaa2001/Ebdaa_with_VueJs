<template>
  <div class="main" :style="{ backgroundImage: `url(${bgImage})` }">
    <slot />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  bgImage: { type: String },
})
</script>

<style scoped>
.main {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
