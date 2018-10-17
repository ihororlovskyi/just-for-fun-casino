<template>
  <v-app dark>

    <v-toolbar flat height="60" color="#13284f">

      <nuxt-link to="/">
        <img :src="logoImg" alt="LotoFun Logo"/>
      </nuxt-link>

      <v-spacer/>

      <v-btn
        flat
        round
        class="error"
        :to="btnRegister.url"
        v-html="btnRegister.name"
        v-if="!userIsAuthenticated"
      />

      <v-btn
        flat
        round
        outline
        :to="btnLogin.url"
        v-html="btnLogin.name"
        v-if="!userIsAuthenticated"
      />

      <!-- <v-btn
        flat
        round
        class="success"
        :to="btnCashbox.url"
        v-html="btnCashbox.name"
        v-if="userIsAuthenticated"
      /> -->

      <v-btn
        flat
        round
        outline
        :to="btnProfile.url"
        v-html="btnProfile.name"
        v-if="userIsAuthenticated"
      />

    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>

    <v-footer flat height="74" color="#13284f">
      <v-flex text-xs-center v-html="copyright"/>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        logoImg: '/img/logos/logo.svg',
        btnRegister: {
          name: 'Registration',
          url: '/user/register'
        },
        btnLogin: {
          name: 'Login',
          url: '/user/login'
        },
        // btnCashbox: {
        //   name: 'Cashbox',
        //   url: '/cashbox'
        // },
        btnProfile: {
          name: 'Profile',
          url: '/user/profile'
        },
        btnProfile: {
          name: 'Profile',
          url: '/user/profile'
        },
        btnAdmin: {
          name: 'Admin',
          icon: 'mdi-security',
          url: '/admin'
        },
        copyright: '2018 © Just For Fun Casino'
      }
    },
    computed: {
      userIsAuthenticated () {
        return this.$store.getters.userIsAuthenticated
      }
    }
  }
</script>

<style lang="stylus">
</style>
