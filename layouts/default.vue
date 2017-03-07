<template>
  <div class="flex-sticky">

    <div class="flex-sticky__content">
      <HeaderAlpha/>
      <nuxt/>
    </div>
    <div class="flex-sticky__footer">
      <FooterAlpha/>
    </div>

  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&subset=cyrillic');
@import '../node_modules/normalize.css/normalize.css';

body {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  background-color: rgba(#000,.05);;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
}

html {
  height: 100%;
}

body {
  height: 100%;
}

#__nuxt {
  height: 100%;
}

.flex-sticky {
  min-height: 100%;
  display: flex;
  flex-direction: column;

  &__content {
    flex: 1;
  }

  &__footer {
  }
}
</style>

<script>
import HeaderAlpha from '~components/HeaderAlpha.vue'
import FooterAlpha from '~components/FooterAlpha.vue'

export default {
  components: {
    HeaderAlpha,
    FooterAlpha
  }
}
</script>
