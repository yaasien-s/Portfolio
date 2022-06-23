import {createRouter, createWebHistory} from 'vue-router'
import Home from '/src/components/Home.vue'
import About from '/src/components/About.vue'
import Contact from '/src/components/Contact.vue'
import Resume from '/src/components/Resume.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/resume',
        name: 'Resume',
        component: Resume,
    },

]
const router =createRouter({
    history: createWebHistory(),
    routes,
})

export default router