import { getWidgetsAttrs } from '@/packages/widgets'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

interface Element {
    id: number
    type: string
    props: any
    style?: any
    value?: string
}

const widgetAttrs = getWidgetsAttrs()

export const useEditorStore = defineStore('editor-store', () => {
    const elements = ref<Element[]>([
        {
            id: 1,
            type: 'text',
            props: {},
            style: {
                fontSize: '20px',
                textAlign: 'center',
            },
            value: '标题',
        },
        {
            id: 2,
            type: 'img',
            props: {
                src: 'https://images.pexels.com/photos/11802389/pexels-photo-11802389.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
            },
            style: {
                width: '100%',
                borderRadius: '10px',
            },
        },
    ])

    const activeElementId = ref(-999)
    const activeElement = ref<any>(null)
    const activeElementAttrs = ref<any[]>([])

    watch(activeElementId, (val) => {
        activeElement.value = elements.value.find((item) => item.id === val)
        activeElementAttrs.value = widgetAttrs.filter(
            (item) => item.type === activeElement.value.type
        )
    })

    return { elements, activeElementId, activeElement, activeElementAttrs }
})
