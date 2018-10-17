<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-card flat>
        <iframe :src="game.iframe"/>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    computed: {
      // loading () {
      //   return this.$store.getters.loading
      // },
      game () {
        return this.$store.getters.loadedGame(this.$route.params.key)
      }
    },
    head: {
      title: this.game.title,
      meta: [
        { name: 'description', content: '' },
        { property: 'og:image', content: '' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
