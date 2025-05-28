<template>
  <div>
    <h1 class="mb-8 pb-5 border-b text-3xl font-bold text-gray-900 dark:text-white">Configurações do Sistema</h1>

    <fieldset>
      <legend>Dados da Temporada</legend>
      <label for="">Temporada Atual</label>
      <select name="" id="">
        <option value=""></option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
      </select>
      <button type="button">Editar</button>
    </fieldset>
  </div>
</template>

<script>
  export default {
    name: "SystemSettingsPage"
  }
</script>
