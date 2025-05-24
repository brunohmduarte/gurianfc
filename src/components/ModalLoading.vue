<template>
  <div class="absolute top-0 left-0 w-full h-screen bg-white/50 flex items-center justify-center z-50">
    <div class="w-100 h-100 p-10 flex justify-center items-center flex-col">
      <div class="w-20 h-20 border-2 border-l-gray-800 rounded-full animate-spin mb-2"></div>
      <span class="text-gray-800 text-sm">Carregando...</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ModalLoading"
  }
</script>

