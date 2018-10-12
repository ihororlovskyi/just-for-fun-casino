<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-card flat>
        <iframe/>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
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
