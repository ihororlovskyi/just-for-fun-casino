<template>
  <header class="header-alpha">
    <nuxt-link class="header-alpha__link" to='/' exact>Mess division</nuxt-link>
    <nuxt-link class="header-alpha__link" to='/clothes'>Сlothes</nuxt-link>
    <nuxt-link class="header-alpha__link" to='/soap'>Soap</nuxt-link>
    <nuxt-link class="header-alpha__link" to='/contacts'>Contacts</nuxt-link>
  </header>
</template>

<style lang="scss">
@import '../node_modules/coriolan-ui/tools/variables';
@import '../node_modules/coriolan-ui/mixins/media';

.header-alpha {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &__link {
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
