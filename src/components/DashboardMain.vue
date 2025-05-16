<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <!-- Navegate -->
    <DashboardHeader />

    <!-- Sidebar -->
    <DashboardSidebar />

    <!-- Main -->
    <DashboardContent />
  </div>
</template>

<script>
  import DashboardHeader from '@/components/DashboardHeader.vue';
  import DashboardSidebar from '@/components/DashboardSidebar.vue';
  import DashboardContent from '@/components/DashboardContent.vue';

  export default {
    name: "DashboardMain",
    components: {
      DashboardHeader,
      DashboardSidebar,
      DashboardContent
    }
  }
</script>