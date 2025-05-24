<template>
  <!-- <pre>{{ $store.state.match }}</pre> -->

  <div class="bg-white/50 rounded-lg h-auto py-6 px-5 text-center">
    <h4 class="font-semibold uppercase text-gray-900">Partida 1</h4>
    
    <div class="team flex justify-between items-center">
      <div class="flex flex-col justify-center items-center">
        <img src="../assets/images/camisa-azul.png" alt="Time A" width="60" />
        <span class="font-semibold text-gray-800">Time A</span>
      </div>

      <div class="text-5xl text-gray-800 font-semibold">1</div>
    
      <p class="text-5xl text-gray-800">x</p>

      <div class="text-5xl text-gray-800 font-semibold">2</div>
      
      <div class="flex flex-col justify-center items-center">
        <img src="../assets/images/camisa-branca.png" alt="Time B" width="60" />
        <span class="font-semibold text-gray-800">Time B</span>
      </div>
    </div>

    <p class="text-xs font-semibold text-gray-800">Encerrado</p>
  </div>
</template>

<script>
  export default {
    name: "CardMatch",
    props: ["matchId"],
    data() {
      return {
        // matchData: this.$store.state.match
      }
    },
    created() {
      console.log('CardMatch', this.matchId);
      
      // Carrega os dados de cada partida
      this.$store.dispatch('getMatchData', this.matchId);
    }
  }
</script>
