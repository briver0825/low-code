import { App } from 'vue'
import { naiveComponentsRegister } from './naive-components-register'
import { router } from './router'
import { pinia } from './pinia'

export const registerPlugins = (app: App) => {
    app.use(router)
    app.use(pinia)
    app.use(naiveComponentsRegister)
}
