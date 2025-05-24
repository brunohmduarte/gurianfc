<template>
  <router-view />

  <ModalLoading v-if="showModal" />
</template>

<script>
  import ModalLoading from '@/components/ModalLoading.vue';

  export default {
    name: 'App',
    components: {
      ModalLoading
    },
    data() {
      return {
        showModal: this.$store.getters.showOrHideModalLoading
      }
    }
  }
</script>