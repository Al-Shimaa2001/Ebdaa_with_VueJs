<template>
  <main class="my-25 mx-20">
    <CartSection :cartTitle="cartTitle">
      <section class="flex flex-col flex-wrap md:flex-row justify-center items-center gap-4">
        <CartBody
          :srcImage="cart.cartImage"
          :title="cart.title"
          :details="cart.details"
          v-for="cart in carts"
          :key="cart.cartId"
        />
      </section>
    </CartSection>
  </main>
</template>

<script setup>
import CartSection from '../App/Carts/CartSection.vue'
import CartBody from '../App/Carts/CartBody.vue'
import { ref } from 'vue'
const hoverAdd = ref(true)

const cartTitle = 'سماعات'
const carts = ref([
  {
    cartId: 1,
    cartTitle: ' محولات الطاقة لفون',
    cartImage: '/images/headphone.png',
    title: ' محولات الطاقة لفون',
    details: 'سماعة على الاذن بلوتوث لاسلكية P9 مع.... ',
  },
  {
    cartId: 2,
    cartTitle: 'سماعات',
    cartImage: '/images/headphone.png',
    title: ' محولات الطاقة لفون',
    details: 'سماعة على الاذن بلوتوث لاسلكية P9 مع.... ',
  },
  {
    cartId: 3,
    cartTitle: 'سماعات ',
    cartImage: '/images/headphone.png',
    title: ' محولات الطاقة لفون',
    details: 'سماعة على الاذن بلوتوث لاسلكية P9 مع.... ',
  },
  {
    cartId: 4,
    cartTitle: 'سماعات ',
    cartImage: '/images/headphone.png',
    title: ' محولات الطاقة لفون',
    details: 'سماعة على الاذن بلوتوث لاسلكية P9 مع.... ',
  },
])
</script>

<style scoped></style>
