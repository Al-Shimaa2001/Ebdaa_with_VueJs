<template>
  <div>
    <MainNav />
    <HeaderBg
      bg-image="/src/assets/images/hero.png"
      class="grid grid-cols-1 place-content-center gap-10 h-[338px]"
      ><p class="text-color font-bold text-[56px]/30 text-center w-[760px] h-[224px] col-start-2">
        جاهز تعيش تجربة تقنية <span class="text-primary">مختلفة</span> أحدث الأجهزة بانتظارك!
      </p>
      <ButtonCom btn-title="تسوق الان" class="col-start-2 flex justify-center items-center" />
    </HeaderBg>
  </div>
</template>

<script setup>
import MainNav from '../LandingPage/NavBar/MainNav.vue'
import HeaderBg from './HeaderBg.vue'
import ButtonCom from '../ButtonCom.vue'
</script>

<style scoped></style>
