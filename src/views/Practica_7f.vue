<script setup lang="ts">

import { computed, ref, type Ref } from 'vue';

const contador = ref(0);
const favoritos: Ref<number[]> = ref([]);

const clase_contador = computed(function () {
	if (contador.value > 0)
		return 'alert-success';
	else if (contador.value < 0)
		return 'alert-error';
});

function existe_favorito() {
	if (favoritos.value.includes(contador.value))
		return true;
	else
		return false;
}

function agregar_favorito() {
	favoritos.value.push(contador.value);
}

function incremento() {
	contador.value++;
}

function reduccion() {
	contador.value--;
}

function reseteo_contador() {
	contador.value = 0;
}

function reseteo_favoritos() {
	favoritos.value = [];
}

</script>

<template>
	<div class="card w-96 bg-base-300 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">Números Favoritos</h2>

			<!-- Contador -->
			<div :class="clase_contador" class="alert flex justify-center">
				<span>{{ contador }}</span>
			</div>

			<!-- Botones Contador -->
			<div class="card-actions justify-end">
				<div class="join">
					<button @click="incremento" class="btn join-item">+</button>
					<button @click="reduccion" class="btn join-item">-</button>
					<button @click="reseteo_contador" class="btn join-item">Resetear</button>
				</div>
			</div>

			<!-- Lista -->
			<div class="overflow-x-auto mt-2">
				<table class="table bg-base-100">
					<tbody>
						<!-- Renglón -->
						<tr v-for="numero in favoritos" class="flex justify-center">
							<th>{{ numero }}</th>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- Botones -->
			<div class="card-actions justify-end">
				<div class="join">
					<button @click="reseteo_favoritos" class="btn join-item">Resetear</button>
					<button @click="agregar_favorito" :disabled="existe_favorito()" class="btn join-item">Agregar</button>
				</div>
			</div>
		</div>
	</div>
</template>