<template>
  <div class="contacts">
    <p>Send message to us via <a class="footer-alpha__soclink" href='https://www.facebook.com/messdivision' target='_blank'>facebook</a></p>
    <!-- <p>
      <a class="contacts__link" href="mailto:olgaklapak@gmail.com?subject=Hello, Olga">olgaklapak@gmail.com</a>
      <a class="contacts__link" href="mailto:jujumony@gmail.com?subject=Hello, Julia">jujumony@gmail.com</a>
    </p> -->
  </div>
</template>

<style lang="scss">
@import '../node_modules/coriolan-ui/tools/variables';
@import '../node_modules/coriolan-ui/mixins/media';

.contacts {
  padding-top: 10em;

  &__link {
    padding: 1em 2em;
    display: block;

    @include media(M) {
      display: inline-block;
    }
  }
}
</style>

<script>
export default {
  layout: 'default',
  head: {
    title: 'Contacts',
    meta: [
      { name: 'description', content: 'Contacts page description' },
      { property: 'og:image', content: 'Contacts page og-image' }
    ]
  }
}
</script>
