<template>
  <div>
    <MainNav />
    <HeaderBg
      bg-image="/public/images/hero.png"
      class="grid grid-cols-1 place-content-center gap-10 h-[338px]"
      ><p
        class="text-color font-bold text-3xl/30 md:text-[56px]/30 text-center md:w-[760px] h-56 md:col-start-2"
      >
        جاهز تعيش تجربة تقنية <span class="text-primary">مختلفة</span> أحدث الأجهزة بانتظارك!
      </p>
      <AppButton
        class="md:col-start-2 flex justify-center items-center"
        @click="handelScrollToSection"
      >
        تسوق الان
      </AppButton>
    </HeaderBg>
  </div>
</template>

<script setup>
import MainNav from '../Header/NavBar/MainNav.vue'
import HeaderBg from './HeaderBg.vue'
import AppButton from '../App/AppButton.vue'

function handelScrollToSection() {
  console.log('hi')
}
</script>

<style scoped></style>
