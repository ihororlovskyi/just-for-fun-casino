<template>
  <v-dialog
    v-model="removeGameDialog"
    max-width="444"
    @keydown.esc="removeGameDialog=false"
  >

    <v-tooltip
      top
      slot="activator"
      color="error"
      open-delay="0"
    >
      <v-btn
        fab
        small
        color="error"
        slot="activator"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <span>Remove Game</span>
    </v-tooltip>

    <v-card>
      <v-card-title class="headline">Remove Game</v-card-title>
      <v-card-text>
        Game will be permanently removed.<br>
        Are you sure you want to remove this game?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click.stop="removeGameDialog=false">Cancel</v-btn>
        <v-btn color="error" @click="onRemove">Remove</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<script>
  export default {
    props: ['game'],
    data () {
      return {
        removeGameDialog: false
      }
    },
    methods: {
      onRemove () {
        this.removeGameDialog = false
        this.$store.dispatch('removeGame', {
          id: this.game.id,
          // imageUrl: this.game.imageUrl
        })
        this.$router.push('/admin/games')
      }
    }
  }
</script>

<style>
</style>
