<template>
  <v-layout wrap>

    <v-progress-circular
      v-if="loading"
      indeterminate
      :size="40"
      color="amber"
    />

    <v-flex v-else xs6 sm4 md3 v-for="i in games" :key="i.id" @click="onLoadGame(i.id)" v-ripple>
      <v-card flat class="ma-1">
        <v-img :src="i.image" :aspect-ratio="3/2"/>
        <v-card-text class="text-xs-center" v-html="i.title"/>
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>
  export default {
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      games () {
        return this.$store.getters.loadedGamesSortedByDate
      }
    },
    methods: {
      onLoadGame (id) {
        this.$router.push('/play/' + id)
      }
    },
    head: {
      title: 'Home',
      meta: [
        { name: 'description', content: '' },
        { property: 'og:image', content: '' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
