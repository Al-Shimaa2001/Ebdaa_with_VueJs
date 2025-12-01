<template>
  <main class="formMain">
    <FormHeader title="Sign Up"></FormHeader>
    <form
      @submit.prevent="handelSubmit"
      class="place-items-center md:m-4 md:p-4 grid gap-2 w-80 md:w-100"
    >
      <div class="flex flex-col gap-1 text-primary">
        <label for="fullName" class="text-primary text-lg block my-2"> Full Name : </label>
        <input
          type="text"
          name="text"
          id="fullName"
          placeholder="don mo"
          v-model="name"
          class="border border-primary p-2 rounded-lg md:w-100"
        />
        <span :class="nameError ? 'inline-block text-red-500 ' : 'hidden'">
          please enter fullName</span
        >
      </div>
      <div class="flex flex-col gap-1 text-primary">
        <label for="email" class="text-primary text-lg block my-2"> Email: </label>
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="hello@reallygreatsite.com"
          v-model="email"
          class="border border-primary p-2 rounded-lg md:w-100"
        />
        <span :class="emailError ? 'inline-block text-red-500 ' : 'hidden'">
          please enter email</span
        >
      </div>
      <div>
        <label class="text-primary text-lg block my-2"> New Password: </label>
        <input
          type="password"
          placeholder="enter new password"
          v-model="password"
          class="border rounded md:p-2 outline-0 md:w-100"
        />
        <span :class="passError ? 'inline-block text-red-500 ' : 'hidden'">
          please enter password</span
        >
      </div>
      <div>
        <label class="text-primary text-lg block my-2"> Confirm Password: </label>
        <input
          type="password"
          placeholder="enter password again"
          v-model="confirmPass"
          class="border rounded md:p-2 outline-0 md:w-100"
        />
        <span :class="confirmError ? 'inline-block text-red-500 ' : 'hidden'">
          please enter same password again</span
        >
      </div>
      <AppButton @click="handelSubmit">SignIn</AppButton>
    </form>
  </main>
</template>

<script setup>
import FormHeader from './FormHeader.vue'
import { ref } from 'vue'
import AppButton from '../AppButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nameError = ref(false)
const emailError = ref(false)
const passError = ref(false)
const confirmError = ref(false)
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPass = ref('')

function handelSubmit() {
  if (
    name.value &&
    email.value &&
    password.value &&
    confirmPass.value &&
    password.value === confirmPass.value
  ) {
    saveToLocalStorage()
    router.push('/login')
    name.value = ''
    email.value = ''
    password.value = ''
    confirmPass.value = ''
    return
  }
  if (
    !name.value ||
    !email.value ||
    !password.value ||
    !confirmPass.value ||
    password.value != confirmPass.value
  ) {
    handelData()
    return
  }
}

function saveToLocalStorage() {
  localStorage.setItem('NameValue', JSON.stringify(name.value))
  localStorage.setItem('emailValue', JSON.stringify(email.value))
  localStorage.setItem('passValue', JSON.stringify(password.value))
  localStorage.setItem('confirmPass', JSON.stringify(confirmPass.value))
}
function handelData() {
  if (!name.value) {
    nameError.value = true
    setTimeout(() => {
      nameError.value = !nameError.value
    }, 3000)
    return
  }
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
  if (!confirmPass.value) {
    confirmError.value = true
    setTimeout(() => {
      confirmError.value = !confirmError.value
    }, 3000)
    return
  }

  if (password.value !== confirmPass.value) {
    confirmError.value = true
    setTimeout(() => {
      name.value = !name.value
    }, 3000)
    return
  }
}
</script>

<style scoped></style>
