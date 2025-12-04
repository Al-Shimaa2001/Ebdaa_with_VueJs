<template>
  <div class="text-primary text-2xl font-bold">{{ salary }}</div>
</template>

<script setup>
defineProps({
  salary: { type: String, required: true },
})
</script>

<style scoped></style>
