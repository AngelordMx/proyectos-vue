import { createRouter, createWebHistory } from 'vue-router'
import Practica_7f from '@/views/Practica_7f.vue'
import Practica_7 from '@/views/Practica_7.vue'
import Inicio from '@/views/Inicio.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'inicio',
			component: Inicio
		},
		{
			path: '/practica_7',
			name: '/practica_7',
			component: Practica_7
		},
		{
			path: '/practica_7f',
			name: '/practica_7f',
			component: Practica_7f
		}
	]
})

export default router
