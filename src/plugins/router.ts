import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'

import Home from '@/pages/home/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
]

export const router = createRouter({
    routes,
    history: createWebHistory(),
})
