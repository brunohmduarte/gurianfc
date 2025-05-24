<template>
  <div>
    <h4 class="font-semibold uppercase text-gray-900 mb-2">Partidas</h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

      <CardMatch 
        v-for="match in allMatches" 
        :key="match.id" 
        :matchId="match.id"
        />

    </div>
  </div>
</template>

<script>
  import CardMatch from '@/components/CardMatch.vue';

  export default {
    name: "CardGame",
    components: {
      CardMatch
    },
    data() {
      return {

      }
    },
    computed: {
      allMatches() {
        return this.$store.getters.allMatches
      }
    }
  }
</script>