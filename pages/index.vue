<template>
  <v-layout wrap>
    <v-flex xs6 sm4 md3 v-for="i in gameList" :key="i.id">
      <v-card flat class="ma-1" :to="'play/' + i.id" v-ripple>
        <v-img :src="i.img" :aspect-ratio="3/2"/>
        <v-card-text class="text-xs-center" v-html="i.title"/>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        gameList: [{
          id: 'halloween-witch',
          img: 'https://ssl-release.cdnfiles.link/uploads/games/fb/2f/22/fb2f228ecaac70e6625a5e1060e141c6.jpeg?1539236443',
          title: 'Halloween Witch'
        }, {
          id: 'roulette-with-track',
          img: 'https://ssl-release.cdnfiles.link/uploads/games/7d/2f/c5/7d2fc5d8365084323bfc36ed045b6c40.jpeg?1539250759',
          title: 'Roulette With Track',
        }]
      }
    },
    head: {
      title: 'Home',
      meta: [
        { name: 'description', content: 'Home of Just For Fun Casino' },
        { property: 'og:image', content: '' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
