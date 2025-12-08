<template>
  <main class="flex flex-row-reverse justify-evenly items-center my-25 px-10">
    <div>
      <img
        src="/src/assets/images/erbods_headphone.png"
        alt="erbods_headphone"
        width="400px"
        height="400px"
      />
    </div>
    <div>
      <h3>غُص في عالمك الخاص!</h3>
      <p>
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
  background-image: url('/src/assets/images/loginBackground.png');
  background: cover no-repeat;
  height: 100vh;
}
</style>
