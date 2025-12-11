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

const cartTitle = 'اجهزه الكترونيه'
const carts = ref([
  {
    cartId: 1,
    cartTitle: 'اجهزه الكترونيه',
    cartImage: '/images/RC_Dron.png',
    title: ' محولات الطاقة لفون',
    details: ' RC Dron HD 4K وضع الكاميرا لطائرة....',
  },
  {
    cartId: 2,
    cartTitle: 'اجهزه الكترونيه',
    cartImage: '/images/RC_Dron.png',
    title: ' محولات الطاقة لفون',
    details: ' RC Dron HD 4K وضع الكاميرا لطائرة....',
  },
  {
    cartId: 3,
    cartTitle: 'اجهزه الكترونيه',
    cartImage: '/images/RC_Dron.png',
    title: ' محولات الطاقة لفون',
    details: ' RC Dron HD 4K وضع الكاميرا لطائرة....',
  },
  {
    cartId: 4,
    cartTitle: 'اجهزه الكترونيه',
    cartImage: '/images/RC_Dron.png',
    title: ' محولات الطاقة لفون',
    details: ' RC Dron HD 4K وضع الكاميرا لطائرة....',
  },
])
</script>

<style scoped></style>
