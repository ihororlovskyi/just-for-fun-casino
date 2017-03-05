<template>
  <header>
    <nuxt-link to='/' exact>Mess division</nuxt-link>
    <nuxt-link to='/contacts'>Contacts</nuxt-link>
  </header>
</template>

<style lang="scss">
@import '../node_modules/coriolan-ui/tools/variables';
@import '../node_modules/coriolan-ui/mixins/media';

header {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    color: #000;
    text-transform: uppercase;
    padding: 0 1em;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    @include media(M) {
      flex-basis: auto;
      padding: 0 2em;
    }

    &.nuxt-link-active {
      background-color: rgba(#000,.05);
    }
  }
}
</style>
