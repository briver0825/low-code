<script lang="ts" setup>
import { ref } from 'vue'

import MdiFormatText from '@/components/icons/MdiFormatTextIcon.vue'
import { reactive } from 'vue'
import { watch } from 'vue'

const inverted = ref(false)

const formValue = reactive({
    width: '',
    height: '',
})

const getSizeString = (size: string, defaultSize?: string) => {
    const sizeNumber = Number(size)

    if (!!sizeNumber) return `${sizeNumber}px`
    return size || defaultSize
}

const getStyles = (style: any) => {
    style = { ...style }
    for (const key in style) {
        style[key] = getSizeString(style[key])
    }
    return style
}

const typeStyleMap: any = {
    text: [
        {
            key: 'fontSize',
            name: '字号',
            fontSize: '20px',
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
    ],
}

const elements = reactive([
    {
        id: 1,
        type: 'text',
        props: {
            text: '标题',
        },
        style: {
            fontSize: '20px',
        },
    },
    {
        id: 2,
        type: 'img',
        style: {
            width: '100%',
            height: '100%',
        },
        props: {
            src: 'https://images.pexels.com/photos/11802389/pexels-photo-11802389.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
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
            <n-layout-sider
                bordered
                show-trigger
                collapse-mode="width"
                :collapsed-width="64"
                :width="200"
                :native-scrollbar="false"
                :inverted="inverted"
                class="h-full"
            >
                <div class="flex flex-wrap py-2 px-4">
                    <div
                        class="w-1/2 rounded p-1"
                        v-for="item in 10"
                        :key="item"
                    >
                        <div
                            class="border p-2 cursor-pointer text-20px flex justify-center"
                        >
                            <MdiFormatText />
                        </div>
                    </div>
                </div>
            </n-layout-sider>
            <n-layout
                has-sider
                sider-placement="right"
            >
                <!-- 中间内容 -->
                <n-layout-content class="w-full bg-#F5F5F5 p-100px">
                    <div class="editor-container">
                        <div
                            v-for="{ type, props, style, id } in elements"
                            :key="type"
                            class="editor-element-wrapper"
                            :class="id === activeElementId ? 'active' : ''"
                            @click="activeElementId = id"
                        >
                            <h1
                                v-if="type === 'text'"
                                v-bind="props"
                                :style="getStyles(style)"
                            >
                                标题
                            </h1>
                            <img
                                v-if="type === 'img'"
                                v-bind="props"
                                :style="getStyles(style)"
                                src="https://images.pexels.com/photos/11802389/pexels-photo-11802389.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                            />
                        </div>
                    </div>
                </n-layout-content>

                <!-- 右边 -->
                <n-layout-sider
                    bordered
                    show-trigger
                    collapse-mode="width"
                    :collapsed-width="10"
                    :width="300"
                    :native-scrollbar="false"
                    :inverted="inverted"
                >
                    <div class="py-2 px-4">
                        <n-tabs type="bar">
                            <n-tab-pane
                                name="props"
                                tab="属性"
                            >
                                <n-form
                                    ref="formRef"
                                    label-placement="left"
                                    label-width="auto"
                                    :model="formValue"
                                    size="small"
                                >
                                    <n-form-item
                                        :label="item.name"
                                        v-for="item in styleList"
                                        :key="item.key"
                                    >
                                        <n-input
                                            v-model:value="
                                                activeElement.style[item.key]
                                            "
                                            placeholder="宽度"
                                        />
                                    </n-form-item>
                                </n-form>
                            </n-tab-pane>
                        </n-tabs>
                    </div>
                </n-layout-sider>
            </n-layout>
        </n-layout>
    </n-layout>
</template>

<style scoped>
.editor-container {
    min-height: 100%;
    box-shadow: 0 8px 12px #ebedf0;
    max-width: 360px;
    background-color: #fff;
    margin: 0 auto;
}

.editor-element-wrapper {
    border: 1px solid transparent;
}

.editor-element-wrapper.active {
    border: 1px solid red;
}
</style>
