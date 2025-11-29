<template>
  <div>
    <MainNav />
    <HeaderBg bg-image="/src/assets/images/hero.png"
      ><p class="text-color font-bold text-6xl">
        جاهز تعيش تجربة تقنية مختلفة أحدث الأجهزة بانتظارك!
      </p>
      <ButtonCom btn-title="تسوق الان" />
    </HeaderBg>
  </div>
</template>

<script setup>
import MainNav from '../LandingPage/NavBar/MainNav.vue'
import HeaderBg from './HeaderBg.vue'
import ButtonCom from '../ButtonCom.vue'
</script>

<style scoped></style>
