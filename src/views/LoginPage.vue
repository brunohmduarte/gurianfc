<template>
  <div class="w-full h-screen flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold mb-4">Login</h1>
    <router-link 
      to="/admin/dashboard"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
    >
      ENTRAR
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'LoginPage',
  components: {}
}
</script>
