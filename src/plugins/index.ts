import { App } from 'vue'
import { naiveComponentsRegister } from './naive-components-register'
import { router } from './router'

export const registerPlugins = (app: App) => {
    app.use(router)
    app.use(naiveComponentsRegister)
}
