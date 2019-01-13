<template>
  <v-card @keydown.enter="onSaveChanges">
    <v-card-text>

      <v-text-field
        name="title"
        id="title"
        label="Title"
        v-model="game.title"
      />
      <v-text-field
        name="slug"
        id="slug"
        label="Slug"
        v-model="game.slug"
      />
      <v-text-field
        name="image"
        id="image"
        label="image"
        v-model="game.image"
      />
      <v-text-field
        name="iframe"
        id="iframe"
        label="iframe"
        v-model="game.iframe"
      />

    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat @click.stop="editGameDialog=false">Cancel</v-btn>
      <v-btn color="success" @click="onSaveChanges">Save</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
  export default {
    // props: ['game'],
    data () {
      return {
        // editedTitle: game.title,
        // editedSlug: this.game.slug,
        // editedImageUrl: this.game.imageUrl,
        // editedIframeUrl: this.game.iframeUrl,
        // editedimage: this.game.image
      }
    },
    computed: {
      game () {
        return this.$store.getters.loadedGame(this.$route.params.key)
      },
    },
    methods: {
      onSaveChanges () {
        const gameData = {
          id: this.game.id,
          title: this.game.title,
          slug: this.game.slug,
          image: this.game.image,
          iframe: this.game.iframe
        }
        this.$store.dispatch('updateGameData', gameData)
        this.$router.push('/admin/games')
      }
    }
  }
</script>

<style>
</style>
