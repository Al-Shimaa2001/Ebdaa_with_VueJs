<template>
  <div>
    <header class="p-4 text-center capitalize">
      <h1 class="font-bold text-4xl text-primary">{{ title }}</h1>
      <slot />
    </header>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>

<style scoped></style>
