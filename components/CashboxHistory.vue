<template>
  <v-card class="mt-4">
    <v-card-title class="headline">History</v-card-title>
    <v-card-text>
      <v-progress-circular
        v-if="loading"
        indeterminate
        :size="40"
        color="amber"
      />
      <div v-else v-for="i in transactions" :key="i.id">
        <v-divider/>
        <i>{{ i.date }}</i> |
        <b>+{{ i.funCoins }} Fun Coins</b>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      transactions () {
        return this.$store.getters.loadedTransactionsSortedByDate
      }
    }
  }
</script>

<style lang="stylus">
</style>
