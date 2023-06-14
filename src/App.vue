<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

	<!-- Barra de Navegación -->
	<div class="navbar bg-base-300">

		<!-- Botón Inicio -->
		<div class="flex-1 px-2 lg:flex-none">
			<RouterLink to="/" class="btn btn-ghost normal-case text-xl">Prácticas Vue</RouterLink>
		</div>

		<!-- Cuerpo de la Barra -->
		<div class="flex justify-end flex-1 px-2">
			<div class="flex items-stretch">
				<div class="dropdown dropdown-end">

					<!-- Botón del Menú -->
					<label tabindex="0" class="btn btn-ghost rounded-btn">Menú</label>

					<!-- Opciones del Menú -->
					<ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-300 rounded-box w-52 mt-4">
						<li><RouterLink to="/practica_7">Práctica 7</RouterLink></li>
						<li><RouterLink to="/practica_7R">Práctica 7 (Ramiro)</RouterLink></li>
						<li><RouterLink to="/practica_7f">Práctica 7 (Fox)</RouterLink></li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- Cuerpo Principal -->
	<div class="flex items-center justify-center h-screen bg-base-100">
		<RouterView />
	</div>
</template>