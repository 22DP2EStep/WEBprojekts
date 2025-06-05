import { createRouter, createWebHistory} from 'vue-router'
import HomeView from '../pages/homePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: '/',
            component: HomeView
        },
        {
            path: '/home',
            name: '/home',
            component: HomeView
        },
        {
            path:'/about',
            name: 'about',
            component: () => import('../pages/aboutPage.vue')
        },
        {
            path:'/compare',
            name: 'universitates',
            component: () => import('../pages/UniversityCompare.vue')
        },
        {
            path: '/privacy-policy',
            name: 'PrivacyPolicy',
            component: () => import('../pages/PrivacyPolicy.vue')
        },
        {
            path: '/Terms',
            name: 'Terms',
            component: () => import('../pages/Terms.vue')
        },

    ]
})
export default router