<template>
  <main class="formMain">
    <FormHeader title="Forget Password"></FormHeader>
    <form
      @submit.prevent="handleForgetPass"
      class="flex flex-col justify-center items-center text-left gap-4.5"
    >
      <div>
        <label class="text-primary text-lg block mb-2"> New Password: </label>
        <input
          type="password"
          placeholder="enter new password"
          v-model="newPass"
          class="border rounded md:p-2 outline-0 md:w-100"
          required
        />
      </div>
      <div>
        <label class="text-primary text-lg block mb-2"> Confirm Password: </label>
        <input
          type="password"
          placeholder="enter password again"
          v-model="confirmPass"
          class="border rounded md:p-2 outline-0 md:w-100"
          required
        />
      </div>
      <div>
        <span :class="passSame ? 'block text-red-700' : 'hidden'">
          password should equal confirm field
        </span>
        <span :class="passEmpty ? 'block text-red-700' : 'hidden'"> please write password </span>
      </div>
      <AppButton @click="handleForgetPass"> Submit </AppButton>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '../AppButton.vue'
import { useRouter } from 'vue-router'
import FormHeader from './FormHeader.vue'

const router = useRouter()
const newPass = ref('')
const confirmPass = ref('')
const oldPass = ref(localStorage.getItem('passValue') || '')
const passSame = ref(false)
const passEmpty = ref(false)

function handleForgetPass() {
  handleCheck()
  if (newPass.value && confirmPass.value && newPass.value === confirmPass.value) {
    localStorage.setItem('passValue', JSON.stringify(newPass.value))
    oldPass.value = newPass.value
    router.push('/login')
    return
  }
}
function handleCheck() {
  if (!newPass.value || !confirmPass.value) {
    passEmpty.value = true
    setTimeout(() => {
      passEmpty.value = !passEmpty.value
    }, 2000)
    return
  }
  if (newPass.value != confirmPass.value) {
    passSame.value = true
    newPass.value = ''
    confirmPass.value = ''
    setTimeout(() => {
      passSame.value = !passSame.value
    }, 2000)
    return
  }
}
</script>

<style scoped></style>
