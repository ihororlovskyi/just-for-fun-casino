<template>
  <v-layout>

    <v-flex xs12 sm6 offset-sm3 v-if="!userIsAuthenticated">
      <v-card>
        <v-card-title class="headline">Cashbox</v-card-title>
        <v-card-text>
          <p>You need to login</p>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 sm6 offset-sm3 v-else>
      <v-card @keydown.enter="onAdd">
        <v-card-title class="headline">Cashbox</v-card-title>

        <v-card-text>

          <p>You can play for free on this site, or you can add "Fun Coins" to your ballance</p>
          <v-text-field
            name="title"
            label="+ FUN COINS"
            prepend-icon="mdi-cash-multiple"
            id="title"
            type="number"
            autofocus
            outline
            required
            v-model="funCoins"
          />

        </v-card-text>

        <v-card-actions>
          <v-spacer/>
          <v-btn
            flat
            round
            @click="onCancel"
          >
            Cancel
          </v-btn>
          <v-btn
            outline
            flat
            round
            @click="onAdd"
            :disabled="!formIsValid"
          >
            <v-icon>mdi-plus</v-icon>
            Add
          </v-btn>
        </v-card-actions>

      </v-card>

      <cashbox-methods/>
      <cashbox-history/>

    </v-flex>
  </v-layout>
</template>

<script>
  import CashboxMethods from '~/components/CashboxMethods'
  import CashboxHistory from '~/components/CashboxHistory'

  export default {
    components: {
      CashboxMethods,
      CashboxHistory
    },
    data () {
      return {
        funCoins: '100'
      }
    },
    computed: {
      userIsAuthenticated () {
        return this.$store.getters.userIsAuthenticated
      },
      formIsValid () {
        return this.funCoins !== ''
      }
    },
    methods: {
      onCancel () {
        this.$router.push('/')
      },
      onAdd () {
        if (!this.formIsValid) {
          return
        }
        const transactionData = {
          date: new Date(),
          funCoins: this.funCoins
        }
        this.$store.dispatch('createTransaction', transactionData)
        // this.$router.push('/')
      }
    },
    head: {
      title: 'Cashbox',
      meta: [
        { name: 'description', content: '' },
        { property: 'og:image', content: '' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
