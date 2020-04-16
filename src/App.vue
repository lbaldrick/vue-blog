<template>
  <div id="app">
    <StandardLayout/>
  </div>
</template>

<script>
import StandardLayout from './components/layouts/StandardLayout.vue'

export default {
  name: 'App',
  components: {
    StandardLayout
  }
}
</script>

<style>

  body {
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
    overflow: hidden;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
