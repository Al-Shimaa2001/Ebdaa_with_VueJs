<template>
  <div>
    <h1>{{ title }}</h1>
    <article>
      <p>{{ details }}</p>
    </article>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  details: { type: String },
})
</script>

<style scoped></style>
