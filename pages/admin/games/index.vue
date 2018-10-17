<template>
  <v-card>
    <v-card-title>
      <h1 class="headline">Games</h1>
    </v-card-title>
    <v-card-text>
      <div v-if="userIsAdmin">

        <div class="mb-5">
          <v-btn color="success" :to="createGameBtn.url">
            <v-icon left>{{ createGameBtn.icon }}</v-icon>
            {{ createGameBtn.title }}
          </v-btn>
        </div>

        <v-progress-circular
          v-if="loading"
          indeterminate
          :size="40"
          color="amber"
        />

        <div v-else>
          <div v-for="i in games" :key="i.id">
            <a @click="onLoadGame(i.id)" v-html="i.title"/>
          </div>
        </div>

      </div>

    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        createGameBtn: {
          title: 'Add New Game',
          icon: 'mdi-plus',
          url: '/admin/games/create'
        }
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      games () {
        return this.$store.getters.loadedGamesSortedByDate
      },
      userIsAdmin () {
        return this.$store.getters.userIsAdmin
      }
    },
    methods: {
      onLoadGame (id) {
        this.$router.push('/admin/games/edit/' + id)
      },
      // onEditPage (id) {
      //   this.$router.push('/admin/games/edit/' + id)
      // }
    },
    head: {
      title: 'Games | Admin',
      meta: [
        { name: 'description', content: '' },
        { property: 'og:image', content: '' }
      ]
    }
  }
</script>

<style>
</style>
