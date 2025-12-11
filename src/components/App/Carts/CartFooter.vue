<template>
  <div class="text-primary text-2xl font-bold">{{ salary }}</div>
</template>

<script setup>
defineProps({
  salary: { type: String },
})
</script>

<style scoped></style>
