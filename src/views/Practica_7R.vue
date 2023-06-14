<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';

const casillas =document.querySelectorAll("cells")
const estadoJugador = document.querySelector("#estadoJugador")
const botonReinicio = document.querySelector("#botonReinicio")
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
function Cliqueoboton(){

}
function Actualizaboton(cell, index){

}
</script>

<template>
	<div class="card w-96 bg-base-300 shadow-xl">
		<div class="card-body items-center">
			<h2 id="Titulo">Gatito</h2>

			<!-- Botones superior -->
			<div id="Contenedordeljuego" class="space-x-5">
				<button cellIndex="0" class="cell btn join-item w-12">x</button>
				<button cellIndex="1" class="cell btn join-item w-12"></button>
				<button cellIndex="2" class="cell btn join-item w-12"></button>
			</div>

			<!-- Botones centro -->
			<div id="Contenedordeljuego" class=" space-x-5">
				<button cellIndex="3" class="cell btn join-item w-12">x</button>
				<button cellIndex="4" class="cell btn join-item w-12"></button>
				<button cellIndex="5" class="cell btn join-item w-12"></button>
			</div>

			<!-- Botones inferior -->
			<div id="Contenedordeljuego" class=" space-x-5">
				<button cellIndex="6" class="cell btn join-item w-12">o</button>
				<button cellIndex="7" class="cell btn join-item w-12"></button>
				<button cellIndex="8" class="cell btn join-item w-12"></button>
			</div>
			<h2 id="turnoJugador" class="card-title">Turno de X !</h2>
			<div class="alert flex justify-center">
				<span>{{ "Equipo "  }}</span>
			</div>
			<button id="botonReinicio" class="btn join-item w-18">Empezar de nuevo!</button>


		</div>
	</div>
</template>

<style>
.cell{
	width: 75px;
	height: 75px;
	box-shadow: 0 0 0 2px;
	line-height: 75px;
	font-size: 50px;
	cursor:grab;
}
#Titulo{
	font-family:"Permanent Marker", cursive;
	font-size: xx-large;
}
#Contenedordeljuego{
	font-family:"Permanent Marker", cursive;
}

</style>