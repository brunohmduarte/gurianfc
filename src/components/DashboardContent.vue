<template>
  <div class="bg-dashboard bg-no-repeat bg-cover bg-center p-5 pt-20 md:ml-64 w-65 h-screen overflow-y-auto">
    <main>
      <div class="mb-4">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Partidas</h2>
        <p class="text-sm text-gray-600">Rodada 9</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

        <div class="bg-white/50 rounded-lg h-auto py-6 px-5 text-center">
          <h4 class="font-semibold uppercase text-gray-900">16 maio 2025</h4>
          <span class="text-sm text-gray-600">Partida 1</span>
          <div class="scoreboard mt-3 flex justify-between items-center">
            <div class="team flex justify-center items-center">
              <div class="team_shield justify-between">
                <img src="../assets/images/camisa-azul.png" alt="Time A" width="60" />
                <span class="font-semibold text-gray-800">Time A</span>
              </div>
              <div class="score ms-5 text-3xl text-gray-800 font-semibold">1</div>
            </div>

            <div class="versus flex flex-col">
              <p class="text-3xl text-gray-800 mt-7">x</p>
              <p class="text-xs font-semibold text-gray-800 mt-5">Encerrado</p>
            </div>
            
            <div class="team flex justify-center items-center flex-row-reverse">
              <div class="team_shield justify-between">
                <img src="../assets/images/camisa-branca.png" alt="Time B" width="60" />
                <span class="font-semibold text-gray-800">Time B</span>
              </div>
              <div class="score me-5 text-3xl text-gray-800 font-semibold">2</div>
            </div>
          </div>
        </div>

        <div class="bg-white/50 rounded-lg h-auto py-6 px-5 text-center">
          <h4 class="font-semibold uppercase text-gray-900">16 maio 2025</h4>
          <span class="text-sm text-gray-600">Partida 2</span>
          <div class="scoreboard mt-3 flex justify-between items-center">
            <div class="team flex justify-center items-center">
              <div class="team_shield justify-between">
                <img src="../assets/images/camisa-azul.png" alt="Time A" width="60" />
                <span class="font-semibold text-gray-800">Time C</span>
              </div>
              <div class="score ms-5 text-3xl text-gray-800 font-semibold">2</div>
            </div>

            <div class="versus flex flex-col">
              <p class="text-3xl text-gray-800 mt-7">x</p>
              <p class="text-xs font-semibold text-gray-800 mt-5">Em andamento</p>
            </div>
            
            <div class="team flex justify-center items-center flex-row-reverse">
              <div class="team_shield justify-between">
                <img src="../assets/images/camisa-branca.png" alt="Time B" width="60" />
                <span class="font-semibold text-gray-800">Time D</span>
              </div>
              <div class="score me-5 text-3xl text-gray-800 font-semibold">2</div>
            </div>
          </div>
        </div>

        <div class="bg-white/50 rounded-lg h-auto py-6 px-5 text-center">
          <h4 class="font-semibold uppercase text-gray-900">16 maio 2025</h4>
          <span class="text-sm text-gray-600">Partida 3</span>
          <div class="scoreboard mt-3 flex justify-between items-center">
            <div class="team flex justify-center items-center">
              <div class="team_shield justify-between">
                <img src="../assets/images/camisa-azul.png" alt="Time A" width="60" />
                <span class="font-semibold text-gray-800">Time E</span>
              </div>
              <div class="score ms-5 text-3xl text-gray-800 font-semibold">0</div>
            </div>

            <div class="versus flex flex-col">
              <p class="text-3xl text-gray-800 mt-7">x</p>
              <p class="text-xs font-semibold text-gray-800 mt-5">Pendente</p>
            </div>
            
            <div class="team flex justify-center items-center flex-row-reverse">
              <div class="team_shield justify-between">
                <img src="../assets/images/camisa-branca.png" alt="Time B" width="60" />
                <span class="font-semibold text-gray-800">Time F</span>
              </div>
              <div class="score me-5 text-3xl text-gray-800 font-semibold">0</div>
            </div>
          </div>
        </div>        

      </div>

    </main>
  </div>
</template>

<script>
  export default {
    name: "DashboardContent",
  };
</script>