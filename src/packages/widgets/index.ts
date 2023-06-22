import { textInstall } from './text'
import { imgInstall } from './img'

const widgetsInstalls = [textInstall, imgInstall]

interface Widget {
    label: string
    widgetKey: string
    icon: any
    element: any
    attrs: any[]
    [key: string]: any
}

export interface Context {
    widgets: Widget[]
}

const context: Context = {
    widgets: [],
}

widgetsInstalls.forEach((install) => {
    install(context)
})

export const getWidgetsAttrs = () => {
    return context.widgets.reduce((prev: any[], cur: any) => {
        return [...prev, ...cur.attrs]
    }, [])
}

export const getWidgets = () => {
    return context.widgets
}

export const getWidget = (widgetKey: string) => {
    return context.widgets.find((item) => item.widgetKey === widgetKey)
}

export const getWidgetAttrs = (widgetKey: string) => {
    const widget = getWidget(widgetKey)
    return widget?.attrs || []
}
