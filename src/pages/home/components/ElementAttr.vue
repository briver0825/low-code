<script setup lang="ts">
import { getWidgetAttrs } from '@/packages/widgets'
import { useEditorStore } from '@/store/editor-store'
import { computed } from 'vue'

const editorStore = useEditorStore()

const element = computed(() => editorStore.activeElement)
const attrs = computed(() => getWidgetAttrs(element.value.type))
</script>
<template>
    <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="10"
        :width="300"
        :native-scrollbar="false"
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
                        size="small"
                        :label-width="100"
                    >
                        <n-form-item
                            :label="item.name"
                            v-for="item in attrs"
                            :key="item.key"
                            v-if="editorStore.activeElement?.props"
                        >
                            <n-input
                                v-if="item.type === 'input'"
                                v-model:value="element[item.group][item.key]"
                                :placeholder="item.name"
                            />
                            <n-color-picker
                                v-if="item.type === 'color'"
                                v-model:value="element[item.group][item.key]"
                            />
                            <n-select
                                v-if="item.type === 'select'"
                                v-model:value="element[item.group][item.key]"
                                :options="item.options"
                            />
                        </n-form-item>
                    </n-form>
                </n-tab-pane>
            </n-tabs>
        </div>
    </n-layout-sider>
</template>
