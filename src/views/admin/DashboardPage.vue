<template>
  <main>
    <div class="grid grid-cols-2 mb-5">
      <div class="flex flex-col justify-center items-start">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Temporada 2025</h2>
        <h4 class="font-semibold uppercase text-gray-900">16 de maio de 2025</h4>
        <p class="text-sm text-gray-600">Rodada 9</p>
      </div>

      <div class="flex justify-end items-center">
        <a 
          href="http://localhost:8080/admin/season" 
          class="py-4 px-8 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Criar nova temporada
        </a>
      </div>
    </div>

    <h4 class="font-semibold uppercase text-white">Implementar na sequência:</h4>
    <ol>
      <li class="text-white">criar uma temporada</li>
      <li class="text-white">criar uma rodada</li>
      <li class="text-white">criar as partidas</li>
      <li class="text-white">listar as partidas</li>
    </ol>

    <CardGame />

  </main>
</template>

<script>
  import CardGame from '@/components/CardGame.vue';

  export default {
    name: "DashboardPage",
    components: {
      CardGame
    },
    created () {
      // Carrega todas as partidas
      this.$store.dispatch('getAllMatches');       
    }
  }
</script>