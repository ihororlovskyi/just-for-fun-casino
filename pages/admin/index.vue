<template>
  <v-card>
    <v-card-title>
      <h1 class="headline">Dashboard</h1>
    </v-card-title>
    <v-card-text>
      <p v-if="!userIsAdmin">You are not an admin</p>
      <p v-else>You are an admin, congrats!</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    userIsAdmin () {
      return this.$store.getters.userIsAdmin
    }
  },
  head: {
    title: 'Admin',
    meta: [
      { name: 'description', content: '' },
      { property: 'og:image', content: '' }
    ]
  }
}</script>

<style>
</style>
