<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <!-- Navegate -->
    <!-- <DashboardHeader /> -->

    <!-- Sidebar -->
    <DashboardSidebar />

    <!-- Main -->
    <!-- <div class="bg-dashboard bg-no-repeat bg-cover bg-center p-5 md:ml-64 w-65 h-screen overflow-y-auto"> -->
    <div class="p-5 md:ml-64 h-screen">
      <!-- <DashboardContent /> -->
      <router-view />
    </div>
  </div>
</template>

<script>
  // import DashboardHeader from '@/components/DashboardHeader.vue';
  import DashboardSidebar from '@/components/DashboardSidebar.vue';
  // import DashboardContent from '@/components/DashboardContent.vue';

  export default {
    name: "AdminLayout",
    components: {
      // DashboardHeader,
      DashboardSidebar,
      // DashboardContent
    }
  }
</script>