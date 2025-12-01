<template>
  <div>
    <form
      @submit.prevent="handelSubmit"
      class="place-items-center md:m-4 md:p-4 grid gap-2 w-80 md:w-100"
    >
      <div class="flex flex-col gap-1 text-primary">
        <label for="email" class="font-medium"> Email: </label>
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="hello@reallygreatsite.com"
          required
          v-model="email"
          class="border border-primary p-2 rounded-lg md:w-100"
        />
        <span :class="emailError ? 'inline-block text-red-500 ' : 'hidden'">
          please enter email</span
        >
      </div>
      <div class="flex flex-col gap-1 text-primary">
        <label for="password" class="font-medium"> Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="******"
          required
          class="border border-primary p-2 rounded-lg md:w-100"
          v-model="password"
        />
        <span :class="passError ? 'inline-block text-2xl m-2 text-red-600' : 'hidden'">
          please enter password</span
        >
        <router-link to="/forgetPass" class="hover:underline hover:font-semibold">
          Forget Password ?</router-link
        >
      </div>
      <AppButton>
        <router-link @click="handelSubmit"> Login </router-link>
      </AppButton>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '../AppButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const emailError = ref(false)
const passError = ref(false)
const email = ref('')
const password = ref('')

if (localStorage.getItem('emailValue') || localStorage.getItem('passValue')) {
  email.value = JSON.parse(localStorage.getItem('emailValue'))
  password.value = JSON.parse(localStorage.getItem('passValue'))
}
function handelSubmit() {
  if (email.value && password.value) {
    saveToLocalStorage()
    router.push('/')
    email.value = ''
    password.value = ''
    return
  }
  if (!email.value && !password.value) {
    handelData()
    return
  }
}

function saveToLocalStorage() {
  localStorage.setItem('emailValue', JSON.stringify(email.value))
  localStorage.setItem('passValue', JSON.stringify(password.value))
}
function handelData() {
  if (!email.value) {
    emailError.value = true
    setTimeout(() => {
      emailError.value = !emailError.value
    }, 3000)
    return
  }
  if (!password.value) {
    passError.value = true
    setTimeout(() => {
      passError.value = !passError.value
    }, 3000)
    return
  }
}
</script>

<style scoped></style>
