<template>
  <div id="app">
    <Gallery></Gallery>
  </div>
</template>

<script>
import Gallery from "./components/Gallery";

export default {
  name: 'app',
  components: {
    Gallery,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
