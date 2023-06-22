<script setup lang="ts">
import { computed } from 'vue'
import { useEditorStore } from '@/store/editor-store'
import { getStyles } from '../utils'
import { getWidget } from '@/packages/widgets'

const editorStore = useEditorStore()

const activeElementId = computed(() => editorStore.activeElementId)
</script>
<template>
    <n-layout-content class="w-full bg-#F5F5F5 p-100px">
        <div class="editor-container">
            <div
                v-for="{
                    type,
                    props,
                    id,
                    value,
                    style,
                } in editorStore.elements"
                :key="type"
                class="editor-element-wrapper"
                :class="id === activeElementId ? 'active' : ''"
                @click="editorStore.activeElementId = id"
            >
                <component
                    :is="getWidget(type)?.element"
                    v-bind="props"
                    :value="value"
                    :style="getStyles(style)"
                />
            </div>
        </div>
    </n-layout-content>
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
    cursor: pointer;
}

.editor-element-wrapper.active {
    border: 1px solid #1890ff;
}
</style>
