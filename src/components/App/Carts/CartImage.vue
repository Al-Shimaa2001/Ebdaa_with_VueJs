<template>
  <div>
    <img :src="src" alt="electronics" width="280" height="286" />
  </div>
</template>

<script setup>
defineProps({
  src: { type: String },
})
</script>

<style scoped></style>
