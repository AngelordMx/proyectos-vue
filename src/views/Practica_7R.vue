<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';

let textojugador = document.getElementById('textojugador')
let botonRestart = document.getElementById('botonRestart')
let casillas = document.getElementsByClassName('casillas')
console.log(casillas)
const ManerasGanar=[
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6],
]
const turnos = ["", "", "", "", "", "", "", "", ""]
const juegoActivo = true;
const jugadorActual = "X";
function InicioJuego(){

}

</script>

<template>
	<div class="card w-96 bg-base-300 shadow-xl">
		<div class="card-body items-center">
			<h2 class="card-title">Gatito</h2>

			<!-- Botones superior -->
			<div class=" space-x-5">
				<button class="btn join-item w-12"></button>
				<button class="btn join-item w-12"></button>
				<button class="btn join-item w-12"></button>
			</div>

			<!-- Botones centro -->
			<div class=" space-x-5">
				<button class="btn join-item w-12"></button>
				<button class="btn join-item w-12"></button>
				<button class="btn join-item w-12"></button>
			</div>

			<!-- Botones inferior -->
			<div class=" space-x-5">
				<button class="btn join-item w-12"></button>
				<button class="btn join-item w-12"></button>
				<button class="btn join-item w-12"></button>
			</div>
			<h2 class="card-title">¡Ganador!</h2>
			<div class="alert flex justify-center">
				<span>{{ "Equipo "  }}</span>
			</div>


		</div>
	</div>
</template>