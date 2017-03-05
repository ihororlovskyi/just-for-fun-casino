<template>
  <div class="home">
    <h1>Mess division</h1>
    <img alt="Mess division" src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/16649387_1332052570186008_6064634743131913011_n.jpg?oh=f594126ea9ffe4b8843e281116acf15a&oe=5942E4F4">
  </div>
</template>

<style lang="scss">
.home {
  img {
    width: 100%;
    max-width: 333px;
  }
}
</style>

<script>
export default {
  layout: 'default',
  head: {
    title: 'Home',
    meta: [
      { name: 'description', content: 'Home page description' },
      { property: 'og:image', content: 'Home page og-image' }
    ]
  }
}
</script>
