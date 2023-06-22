<script lang="ts" setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import { watch } from 'vue'

import ElementList from './components/ElementList.vue'
import ElementAttr from './components/ElementAttr.vue'
import Editor from './components/Editor.vue'

const inverted = ref(false)

const typeStyleMap: any = {
    text: [
        {
            key: 'fontSize',
            name: '字号',
            type: 'input',
        },
        {
            key: 'textAlign',
            name: '文字对齐方式',
            type: 'select',
            options: [
                {
                    label: '左对齐',
                    value: 'left',
                },
                {
                    label: '居中对齐',
                    value: 'center',
                },
                {
                    label: '右对齐',
                    value: 'right',
                },
            ],
        },
    ],
    img: [
        {
            key: 'width',
            name: '宽度',
            type: 'input',
        },
        {
            key: 'height',
            name: '高度',
            type: 'input',
        },
        {
            key: 'borderRadius',
            name: '圆角',
            type: 'input',
        },
    ],
}

const elements = reactive([
    {
        id: 1,
        type: 'text',
        props: {
            text: '标题',
            style: {
                fontSize: '20px',
                textAlign: 'center',
            },
        },
    },
    {
        id: 2,
        type: 'img',
        props: {
            src: 'https://images.pexels.com/photos/11802389/pexels-photo-11802389.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
            style: {
                width: '100%',
                height: '100%',
                borderRadius: '10px',
            },
        },
    },
])

const activeElementId = ref(-999)
const activeElement = ref<any>(null)
const styleList = ref<any>([])

watch(activeElementId, (val) => {
    activeElement.value = elements.find((item) => item.id === val)
    styleList.value = typeStyleMap[activeElement.value.type]
})
</script>

<template>
    <n-layout class="h-screen">
        <n-layout-header
            :inverted="inverted"
            bordered
            class="h-64px p-24px flex items-center justify-between"
        >
            <div>LOGO</div>
            <n-space>
                <n-button quaternary>Low Code</n-button>
            </n-space>
            <div>Right</div>
        </n-layout-header>
        <n-layout
            class="h-[calc(100vh-64px)]"
            has-sider
        >
            <!-- 左边 -->
            <element-list />
            <n-layout
                has-sider
                sider-placement="right"
            >
                <!-- 中间内容 -->
                <editor />
                <!-- 右边 -->
                <element-attr />
            </n-layout>
        </n-layout>
    </n-layout>
</template>
