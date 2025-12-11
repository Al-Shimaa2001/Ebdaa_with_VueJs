<template>
  <main class="flex flex-col lg:flex-row-reverse lg:justify-evenly items-center my-25 p-10">
    <div class="hidden md:flex w-[484px] h-[484px]">
      <img src="/public/images/erbods_headphone.png" alt="erbods_headphone" />
    </div>
    <div class="text-center lg:text-right lg:w-[811px]">
      <h3 class="text-text text-3xl md:text-6xl font-bold my-2">غُص في عالمك الخاص!</h3>
      <p class="text-description text-1xl md:text-3xl my-8">
        اكتشف سماعات الرأس التي تأخذك إلى بُعد جديد من الصوت النقي والتجربة الفريدة, ودع الموسيقى
        تحكي قصتك
      </p>
      <AppButton> تسوق الان</AppButton>
    </div>
  </main>
</template>

<script setup>
import AppButton from '../App/AppButton.vue'
</script>

<style scoped>
main {
  background-image: url('/public/images/loginBackground.png');
  background: cover no-repeat;
}
</style>
