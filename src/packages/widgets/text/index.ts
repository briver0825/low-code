import Icon from './Icon.vue'
import Element from './Element.vue'
import { attrs } from './attrs'
import { Context } from '..'

export const textInstall = (context: Context) => {
    context.widgets.push({
        label: '文本组件',
        widgetKey: 'text',
        icon: Icon,
        element: Element,
        attrs: attrs,
    })
}
