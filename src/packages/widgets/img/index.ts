import Icon from './Icon.vue'
import Element from './Element.vue'
import { attrs } from './attrs'
import { Context } from '..'

export const imgInstall = (context: Context) => {
    context.widgets.push({
        label: '图片组件',
        widgetKey: 'img',
        icon: Icon,
        element: Element,
        attrs: attrs,
    })
}
