<template>
  <div class="relative" @dblclick="addToFav()">
    <img
      :src="src"
      alt="electronics"
      height="286"
      title="double click to add to favorite"
      class="w-full"
    />
    <Icon
      class="absolute text-2xl top-3 left-1.5 cursor-pointer"
      :class="{ ' text-red-600 ': addFav }"
      :icon="addFav ? 'mage:heart-fill' : 'gravity-ui:heart'"
      width="40"
      height="40"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useToast } from 'vue-toastification'
defineProps({
  src: { type: String },
})

const toast = useToast()

const showSuccessToast = () => {
  toast.success('Add To Favorite successful!')
}
const addFav = ref(false)

function addToFav() {
  addFav.value = !addFav.value
  showSuccessToast()
}
</script>

<style scoped></style>
