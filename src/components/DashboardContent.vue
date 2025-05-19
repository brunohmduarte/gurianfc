<template>
  <div class="bg-dashboard bg-no-repeat bg-cover bg-center p-5 pt-20 md:ml-64 w-65 h-screen overflow-y-auto">
    <main>
      <div>
        <h2 class="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">Partidas</h2>

      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64">
          <h4>16 de maio de 20025</h4>
          <p>Rodada 9</p>
          <div class="scoreboard">
            <div class="team">
              <div class="team_shield">
                <img src="" alt="" />
                <span>Team Name</span>
              </div>
              <div class="score">1</div>
            </div>

            <div class="versus">
              <span>x</span>
              <span>Em andamento</span>
            </div>
            
            <div class="team">
              <div class="team_shield">
                <img src="" alt="" />
                <span>Team Name</span>
              </div>
              <div class="score">2</div>
            </div>
          </div>
        </div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64">
          <h4>16 de maio de 20025</h4>
          <p>Rodada 9</p>

        </div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64">
          <h4>16 de maio de 20025</h4>
          <p>Rodada 9</p>

        </div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64">
          <h4>16 de maio de 20025</h4>
          <p>Rodada 9</p>

        </div>
      </div>

      <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>

      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
      </div>

      <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>

      <div class="grid grid-cols-2 gap-4">
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "DashboardContent",
  };
</script>