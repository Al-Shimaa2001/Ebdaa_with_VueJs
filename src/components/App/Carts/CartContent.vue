<template>
  <div>
    <h1 class="">{{ title }}</h1>
    <article>
      <p class="font-bold text-2xl text-cart-des my-6">{{ details }}</p>
    </article>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String },
  details: { type: String },
})
</script>

<style scoped></style>
