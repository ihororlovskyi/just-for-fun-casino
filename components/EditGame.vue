<template>
  <v-dialog
    v-model="editGameDialog"
    max-width="444"
    @keydown.enter="onSaveChanges"
    @keydown.esc="editGameDialog=false"
  >

    <v-tooltip top slot="activator" color="warning" open-delay="0">
      <v-btn
        fab
        small
        color="warning"
        slot="activator"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <span>Edit Game</span>
    </v-tooltip>

    <v-card>
      <v-card-title class="headline">Edit Game</v-card-title>
      <v-card-text>
        <v-text-field
          name="title"
          id="title"
          label="Title"
          v-model="editedTitle"
        />
        <v-text-field
          name="slug"
          id="slug"
          label="Slug"
          v-model="editedSlug"
        />
        <v-text-field
          name="imageUrl"
          id="imageUrl"
          label="Image Url"
          v-model="editedImageUrl"
        />
        <v-text-field
          name="iframeUrl"
          id="iframeUrl"
          label="Iframe Url"
          v-model="editedIframeUrl"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click.stop="editGameDialog=false">Cancel</v-btn>
        <v-btn color="warning" @click="onSaveChanges">Save</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<script>
  export default {
    props: ['game'],
    data () {
      return {
        editGameDialog: false,
        editedTitle: this.game.title,
        editedSlug: this.game.slug,
        editedImageUrl: this.game.imageUrl,
        editedIframeUrl: this.game.iframeUrl
      }
    },
    methods: {
      onSaveChanges () {
        const gameData = {
          id: this.game.id,
          title: this.editedTitle,
          slug: this.editedSlug,
          imageUrl: this.imageUrl,
          iframeUrl: this.iframeUrl
        }
        this.$store.dispatch('updateGameData', gameData)
        this.editGameDialog = false
        // this.$router.push('/admin/lotteries')
      }
    }
  }
</script>

<style>
</style>
