<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2 lg6 offset-lg3>

      <alert v-if="error" @dismissed="onDismissed" :text="error.message"/>

      <v-card>
        <v-card-text>

          <h1>Registration</h1>

          <form @submit.prevent="onSignup">
            <v-text-field
              name="email"
              label="Email"
              id="email"
              v-model="email"
              type="email"
              autocomplete="email"
              required
            />

            <v-text-field
              name="password"
              label="Password"
              id="password"
              v-model="password"
              type="password"
              autocomplete="password"
              required
            />

            <!-- <v-text-field
              name="confirmPassword"
              label="Confirm Password"
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              autocomplete="confirm-password"
              :rules="[comparePasswords]"
              required
            /> -->

            <div>
              <v-btn
                class="ml-0"
                color="success"
                large
                :loading="loading"
                :disabled="loading"
                type="submit"
              >Sign Up</v-btn>
            </div>
          </form>

          <br>

          <router-link to="/user/login">Already have an account?</router-link>

        </v-card-text>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>
  import Alert from '~/components/Alert'

  export default {
    components: {
      Alert
    },
    layout: 'admin',
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/admin/')
        }
      }
    },
    methods: {
      onSignup () {
        this.$store.dispatch('signUserUp', {
          email: this.email,
          password: this.password
        })
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
    },
    head: {
      title: 'Reristration',
      meta: [
        { name: 'description', content: 'Reristration of Just For Fun Casino' },
        { property: 'og:image', content: '' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
