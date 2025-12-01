<template>
  <main>
    <section class="large">
      <NavBarLarge />
    </section>
    <section class="mobile">
      <NavBarMobile />
    </section>
  </main>
</template>

<script setup>
import NavBarLarge from './NavBarLarge.vue'
import NavBarMobile from './NavBarMobile.vue'
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .large {
    display: block;
  }
  .mobile {
    display: none;
  }
}
@media screen and (min-width: 0px) and (max-width: 767px) {
  .large {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
