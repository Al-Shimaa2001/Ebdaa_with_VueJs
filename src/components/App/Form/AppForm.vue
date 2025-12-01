<script setup>
import FormHeader from './FormHeader.vue'
import LoginForm from './LoginForm.vue'
</script>

<template>
  <main class="formMain">
    <FormHeader title="Login">
      <router-link to="/signup" class="text-gray-500 hover:font-semibold hover:underline"
        >sign in to continue</router-link
      >
    </FormHeader>
    <LoginForm />
  </main>
</template>
