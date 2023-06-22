<script setup lang="ts">
import { getWidgets } from '@/packages/widgets'

const widgets = getWidgets()
</script>
<template>
    <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :width="200"
        :native-scrollbar="false"
        class="h-full"
    >
        <div class="flex flex-wrap py-2 px-4">
            <div
                class="w-1/2 rounded p-1"
                v-for="widget in widgets"
                :key="widget.widgetKey"
            >
                <div class="border p-2 cursor-pointer">
                    <div class="text-20px flex justify-center">
                        <component :is="widget.icon" />
                    </div>
                    <div class="text-10px text-center mt-1">
                        {{ widget.label }}
                    </div>
                </div>
            </div>
        </div>
    </n-layout-sider>
</template>
