import { App } from 'vue'

import {
    NButton,
    NForm,
    NFormItem,
    NInput,
    NLayout,
    NLayoutFooter,
    NLayoutHeader,
    NLayoutSider,
    NMenu,
    NMessageProvider,
    NSpace,
    NTabPane,
    NTabs,
} from 'naive-ui'

const COMPONENT_PREFIX = 'N'

const components = [
    NButton,
    NMessageProvider,
    NSpace,
    NLayout,
    NLayoutHeader,
    NLayoutSider,
    NLayoutFooter,
    NMenu,
    NTabs,
    NTabPane,
    NInput,
    NForm,
    NFormItem,
]

export const naiveComponentsRegister = (app: App) => {
    components.forEach((component) => {
        const name = `${COMPONENT_PREFIX}${component.name}`
        app.component(name, component)
    })
}
