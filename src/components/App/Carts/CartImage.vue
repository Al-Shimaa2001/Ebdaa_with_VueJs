<template>
  <div class="relative" @dblclick="dblclick = !dblclick">
    <img :src="src" alt="electronics" width="280" height="286" />
    <Icon
      class="absolute text-2xl top-3 left-1.5 cursor-pointer"
      :class="{ ' text-red-600 ': dblclick }"
      :icon="dblclick ? 'mage:heart-fill' : 'gravity-ui:heart'"
      width="40"
      height="40"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
defineProps({
  src: { type: String },
})

const dblclick = ref(false)
</script>

<style scoped></style>
