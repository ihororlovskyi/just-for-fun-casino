<template>
  <v-card>
    <form @submit.prevent="onCreateGame">
      <v-card-text>
        <h1 class="headline">Create New Game</h1>
        <v-text-field
          name="title"
          label="Title"
          id="title"
          v-model="title"
          type="title"
          autocomplete="title"
          required
        />
        <v-text-field
          name="slug"
          label="Slug"
          id="slug"
          v-model="slug"
          type="slug"
          autocomplete="slug"
          required
        />
        <v-text-field
          name="imageUrl"
          label="Image Url"
          id="imageUrl"
          v-model="imageUrl"
          type="imageUrl"
          autocomplete="imageUrl"
          required
        />
        <v-text-field
          name="iframeUrl"
          label="Iframe Url"
          id="iframeUrl"
          v-model="iframeUrl"
          type="iframeUrl"
          autocomplete="iframeUrl"
          required
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          class="ml-0"
          color="success"
          large
          :disabled="!formIsValid"
          type="submit"
        >
          <v-icon left>mdi-plus</v-icon>
          Create
        </v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        slug: '',
        imageUrl: '',
        iframeUrl: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' && this.slug !== '' && this.imageUrl !== '' && this.iframeUrl !== ''
      }
    },
    methods: {
      onCreateGame () {
        if (!this.formIsValid) {
          return
        }
        const gameData = {
          date: new Date(),
          title: this.title,
          slug: this.slug,
          imageUrl: this.imageUrl,
          iframeUrl:  this.iframeUrl
        }
        this.$store.dispatch('createGame', gameData)
        this.$router.push('/admin/games')
      }
    }
  }
</script>

<style>
</style>
