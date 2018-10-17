<template>
  <v-layout wrap>
    <v-flex xs12 lg10 offset-lg1>
      <v-card flat>
        <v-card-title>
          <h1 class="headline" v-html="game.title"/>
        </v-card-title>
        <v-card-text class="pt-0">
          <div class="game-container">
            <iframe class="d-block game-iframe" :src="game.iframe"/>
          </div>
        </v-card-text>
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
      title: 'Game',
      meta: [
        { name: 'description', content: '' },
        { property: 'og:image', content: '' }
      ]
    }
  }
</script>

<style lang="stylus">
  .game-container
    position relative
    padding-bottom ((9/16) * 100) %
    background #000

  .game-iframe
    border none
    position absolute
    top 0
    left 0
    width 100%
    height 100%
</style>
