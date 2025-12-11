<template>
  <main class="my-25 mx-20">
    <header>
      <h1 class="text-text text-4xl font-bold text-center my-10">تسوق عبر الاقسام</h1>
    </header>
    <section class="flex flex-col lg:flex-row justify-center items-center gap-8">
      <div v-for="dept in departments" :key="dept.id">
        <img :src="dept.Image" :alt="dept.title" />
        <h3 class="text-text text-3xl font-bold text-center my-8">{{ dept.title }}</h3>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const departments = ref([
  { id: '1', Image: '/images/electronics.png', title: 'اجهزه الكترونيه' },
  { id: '2', Image: '/images/airPhone.png', title: 'السماعات' },
  { id: '3', Image: '/images/power.png', title: 'الشواحن والبطاريات' },
])
</script>

<style scoped></style>
