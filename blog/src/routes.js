import {createRouter, createWebHistory} from 'vue-router'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import About from './components/About.vue'
import Profile from './components/Profile.vue'
import PageNotFound from './components/PageNotFound.vue'

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
    {
        name:"Profile",
        path:'/profile/:name',
        component:Profile
    },
    {
        name:"PageNotFound",
        path:'/:pathMatch(.*)*',
        component:PageNotFound
    },
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router; 