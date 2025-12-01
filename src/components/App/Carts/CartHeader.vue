<template>
  <main class="flex justify-between">
    <div class="text-text text-2xl font-bold">{{ title }}</div>
    <div><slot /></div>
  </main>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>

<style scoped></style>
