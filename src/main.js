import './assets/css/main.css'

import { createApp, Transition } from 'vue'
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'
import Toast from 'vue-toastification' // Import the plugin
import 'vue-toastification/dist/index.css' // Import the CSS

const app = createApp(App)

app.use(router)
app.use(Toast, {
  transition: {
    enter: 'fade-enter-active',
    leave: 'Vue-Toastification__bounce-leave-active',
    move: 'fade-move',
  },
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
}) // Use the plugin
app.component('Icon', Icon)
app.mount('#app')
