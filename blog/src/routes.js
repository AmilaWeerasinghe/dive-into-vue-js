import {createRouter, createWebHistory} from 'vue-router'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import About from './components/About.vue'

const routes=[
    {
        name:"Home",
        path:'/',
        component:Home
    },
    {
        name:"Login",
        path:'/login',
        component:Login
    },
    {
        name:"Home",
        path:'/about',
        component:About
    },
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router; 