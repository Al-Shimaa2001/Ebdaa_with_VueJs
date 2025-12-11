<script setup>
import { ref } from 'vue'
const openList = ref(false)
function openNavList() {
  openList.value = !openList.value
}
</script>
<template>
  <div class="flex justify-between items-center m-7">
    <div>
      <routerLink to="/">
        <img src="/public/images/Logo.png" alt="logo" class="w-[138px] h-10" />
      </routerLink>
    </div>
    <div @click="openNavList">
      <Icon
        icon="iconamoon:menu-burger-horizontal-duotone"
        width="24"
        height="24"
        style="color: #004956"
      />
    </div>
    <section
      :class="
        openList
          ? 'flex flex-col gap-4 absolute right-0 top-30 bg-white shadow-2xl tr h-full p-4 px-10 rounded-2xl'
          : 'hidden'
      "
    >
      <div class="flex items-center gap-2 border border-primary p-1 rounded-2xl">
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
        <div><span>مرحبا بك</span> <button>تسجيل الدخول</button></div>
      </section>
      <div class="flex items-center gap-2 place-content-end">
        <Icon icon="iconoir:cart" width="24" height="24" style="color: #004956" />
        <Icon
          icon="material-symbols-light:language-pinyin-sharp"
          width="24"
          height="24"
          style="color: #004956"
        />
        <Icon icon="weui:setting-outlined" width="24" height="24" style="color: #004956" />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
