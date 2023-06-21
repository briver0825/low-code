import { createApp } from 'vue'
import App from './App.vue'

import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

import { registerPlugins } from './plugins'

const app = createApp(App)

app.use(registerPlugins)

app.mount('#app')
