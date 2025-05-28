<template>
  <section class="bg-white/50 dark:bg-gray-900">
    <div class="p-5 max-w-2xl lg:py-16">
      <h2 class="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Configurações do Sistema</h2>

      <form action="#" id="form">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="sm:col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campeonato</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
              placeholder="Nome do campeonato, copa ou liga..." 
              required 
              />
          </div>

          <div class="w-full">
            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data de Início</label>
            <input 
              type="date" 
              name="date_start" 
              id="date_start" 
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
              required
              />
          </div>
          <div class="w-full">
            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data do Término</label>
            <input 
              type="date" 
              name="date_end" 
              id="date_end" 
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
              />
          </div>

          <div>
            <fieldset>
              <legend class="text-white mb-2">O campeonato está em atividade?</legend>

              <div class="flex items-center mb-2">
                <input 
                  id="active-option-yes" 
                  type="radio" 
                  name="active" 
                  value="yes" 
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" 
                  checked
                  />

                <label 
                  for="country-option-1" 
                  class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Sim
                </label>
              </div>

              <div class="flex items-center mb-2">
                <input 
                  id="active-option-no" 
                  type="radio" 
                  name="active" 
                  value="no" 
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />

                <label 
                  for="country-option-2" 
                  class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Não
                </label>
              </div>
            </fieldset>
          </div>

          <div class="sm:col-span-2">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Observações</label>
            <textarea 
              id="description" 
              rows="8" 
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
              placeholder="Observações sobre o campeonato..."
            ></textarea>
          </div>
        </div>

        <button 
          type="submit" 
          class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Salvar
        </button>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    name: "SeasonPage"
  }
</script>