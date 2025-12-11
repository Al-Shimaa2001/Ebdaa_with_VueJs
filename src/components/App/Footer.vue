<template>
  <footer
    class="bg-[#E6EDEE] border-t-2 border-t-[#B0C7CB] rounded-tr-[50px] rounded-tl-[50px] p-10 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8"
  >
    <div>
      <img src="/public/images/Logo.png" alt="logo" width="138" height="40" class="mb-6" />
      <p class="w-[405px] h-[108] text-description">
        تيكزون، متجر إلكتروني في المملكة العربية السعودية في جدة ويقدم العديد من المنتجات
        الإلكترونية من قطع وإكسسوارات وألعاب الأطفال, وغيرها من تسهيلات الحياة، خدماتنا لجميع دول
        الخليج العربي
      </p>
    </div>
    <div>
      <h3 class="mb-4 font-bold text-2xl">روابط مهمه</h3>
      <div class="flex gap-8">
        <router-link to="/">سياسه الاستخدام والخصوصيه</router-link>
        <router-link to="/">سياسه الاستبدال والاسترجاع</router-link>
      </div>
    </div>
    <div>
      <h3 class="mb-4 font-bold text-2xl">تواصل معنا</h3>
      <div class="flex gap-8">
        <router-link to="/" class="bg-primary size-10 rounded-sm flex justify-center items-center">
          <Icon icon="mdi-light:phone" width="28" height="28" style="color: #fff"
        /></router-link>
        <router-link to="/" class="bg-primary size-10 rounded-sm flex justify-center items-center"
          ><Icon icon="lucide:tablet" width="20" height="28" style="color: #fff" />
        </router-link>
        <router-link to="/" class="bg-primary size-10 rounded-sm flex justify-center items-center"
          ><Icon icon="ic:sharp-whatsapp" width="28" height="28" style="color: #fff" />
        </router-link>
        <router-link to="/" class="bg-primary size-10 rounded-sm flex justify-center items-center"
          ><Icon icon="mdi-light:email" width="28" height="20" style="color: #fff" />
        </router-link>
      </div>
    </div>
  </footer>
  <div class="bg-[#D9E4E6] py-6 pr-20 text-2xl font-bold">
    <p>الحقوق محفوظه | TEQZON {{ dateOfYear }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

const dateOfYear = ref(new Date().getFullYear())
</script>

<style scoped></style>
