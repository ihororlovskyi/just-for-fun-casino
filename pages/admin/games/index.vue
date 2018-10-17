<template>
  <v-card>
    <v-card-text>
      <!-- <v-flex> -->
        <h1 class="headline">Games</h1>
        <!-- <v-spacer/> -->
        <v-btn color="success" class="ml-0" :to="createGameBtn.url">
          <v-icon left>{{ createGameBtn.icon }}</v-icon>
          {{ createGameBtn.title }}
        </v-btn>
      <!-- </v-flex> -->

      <v-progress-circular
        v-if="loading"
        indeterminate
        :size="40"
        color="amber"
      />

      <div v-else>
        <div v-for="i in games" :key="i.id">
          <a @click="onLoadGame(i.id)" v-html="i.title"/>
          <!-- <v-btn small flat icon @click="onEditPage(i.id)" :page="i.id">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn> -->
          <!-- <v-icon small>mdi-delete</v-icon> -->
        </div>
      </div>

    </v-card-text>
    <!-- <v-card-actions>
    </v-card-actions> -->
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
