<template>
  <v-card>
    <v-card-text>
      <h1 class="headline">Game Data</h1>
      <edit-game :game="game" v-if="userIsAdmin"/>
      <remove-game :game="game" v-if="userIsAdmin"/>
      <div v-if="game.title">title: {{ game.title }}</div>
      <div v-if="game.slug">slug: {{ game.slug }}</div>
      <!-- <img v-if="game.imageUrl" :src="game.imageUrl"/> -->
      <div v-if="game.imageUrl">imageUrl: {{ game.imageUrl }}</div>
      <!-- <iframe v-if="game.iframeUrl" :src="game.iframeUrl" style="width:100%;height:500px;border:none;"/> -->
      <div v-if="game.iframeUrl">iframeUrl: {{ game.iframeUrl }}</div>
      <div v-if="game.date">date: {{ game.date }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
  import EditGame from '~/components/EditGame'
  import RemoveGame from '~/components/RemoveGame'

  export default {
    components: {
      EditGame,
      RemoveGame
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      game () {
        return this.$store.getters.loadedGame(this.$route.params.key)
      },
      userIsAdmin () {
        return this.$store.getters.userIsAdmin
      }
    }
  }
</script>

<style>
</style>
