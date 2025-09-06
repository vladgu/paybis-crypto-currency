import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createBootstrap } from 'bootstrap-vue-next/plugins/createBootstrap'
import { useToast } from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import App from './App.vue'
import { ApiError } from '@/utils/errors.js'

const app = createApp(App)

app.use(createPinia())
app.use(createBootstrap())

app.config.errorHandler = (err, instance, info) => {
  if (err instanceof ApiError) {
    console.error(`[ApiError:${err.code}]`, err.message)
    const { create } = useToast()

    create({
      title: 'Error',
      body: err.message,
      variant: 'danger',
    })
  } else {
    console.error('[UnknownError]', err, info)
  }
}

app.mount('#app')
