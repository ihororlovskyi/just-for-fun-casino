<template>
  <v-card class="mt-4">
    <v-card-title class="headline">Methods</v-card-title>
    <v-card-text>
      <div class="methods-container">
        <router-link class="methods-item" v-for="i in methods" :key="i.id" :to="'/cashbox/' + i.id">
          <img :src="i.img"/>
        </router-link>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        methods: [
          {
            id: 'card',
            img: 'https://pobeda-stage1.cdnfiles.link/uploads/payment_system/02/f5/21/02f52125e8133e317c46a33673d976a9.png'
          }, {
            id: 'webmoney',
            img: 'https://pobeda-stage1.cdnfiles.link/uploads/payment_system/b7/c6/33/b7c6333599cbe51fec21ede101c3dc4c.png'
          }, {
            id: 'yandex',
            img: 'https://pobeda-stage1.cdnfiles.link/uploads/payment_system/90/87/1d/90871d8f1e35ec634297b176acae169c.png'
          }, {
            id: 'moneta',
            img: 'https://pobeda-stage1.cdnfiles.link/uploads/payment_system/3b/59/cb/3b59cba2e9fbe6f362df6c5bc1ab364b.png'
          }, {
            id: 'qiwi',
            img: 'https://pobeda-stage1.cdnfiles.link/uploads/payment_system/65/09/83/650983cb7f831ad1ee9f87645c39657e.png'
          }, {
            id: 'sms',
            img: 'https://pobeda-stage1.cdnfiles.link/uploads/payment_system/95/c3/75/95c3755a21c608355c2f09ab46e344fd.png'
          }, {
            id: 'alfa',
            img: 'https://pobeda-stage1.cdnfiles.link/uploads/payment_system/91/cd/db/91cddb7d0f72e55dda07b9fa2253ebc2.png'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  .methods-container
    display flex
    flex-direction row
    flex-wrap wrap
    // justify-content center
    align-items center

  .methods-item
    background-color #ebf3fa
    // border 1px solid #cee3f3
    height 68px
    flex-basis 33.33333%
    text-align center
    padding 2px
    filter grayscale(1)
    cursor pointer

    &:hover
      filter: grayscale(0)
      background-color rgba(#ebf3fa,.9)

    img
      height 100%
      width auto

</style>
