<template>
  <div>
    <header>
      <nav class="grid grid-cols-5 gap-3 items-center justify-center pt-3 pb-8">
        <div class="flex place-content-center items-center">
          <routerLink to="/">
            <img src="/src/assets/images/Logo.png" alt="logo" class="w-[138px] h-[40px] mx-7" />
          </routerLink>
          <div class="flex items-center gap-x-2">
            <Icon
              icon="iconamoon:menu-burger-horizontal-duotone"
              width="24"
              height="24"
              style="color: #004956"
            />
            <p>القائمة</p>
          </div>
        </div>
        <div class="flex items-center gap-2 border border-primary p-2 rounded-2xl col-span-2">
          <Icon
            icon="material-symbols-light:search-rounded"
            width="24"
            height="24"
            style="color: #004956"
          />
          <input type="search" placeholder="ابحث هنا" class="outline-0 mr-0.5" />
        </div>
        <section class="flex items-center gap-2">
          <div>
            <Icon icon="iconamoon:profile-thin" width="24" height="24" style="color: #004956" />
          </div>
          <div><span>مرحبا بك</span> <routerLink to="/login">تسجيل الدخول</routerLink></div>
        </section>
        <div class="flex items-center gap-4">
          <Icon icon="iconoir:cart" width="24" height="24" style="color: #004956" />
          <Icon
            icon="material-symbols-light:language-pinyin-sharp"
            width="24"
            height="24"
            style="color: #004956"
          />
          <Icon icon="weui:setting-outlined" width="24" height="24" style="color: #004956" />
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped></style>
