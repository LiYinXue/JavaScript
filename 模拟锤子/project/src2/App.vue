<template>
  <div id="app">
    <img src="./assets/logo.png">
    <list-html></list-html>
  </div>
</template>

<script>
import listHtml from './components/list'
export default {
  name: 'app',
  components: {
    listHtml: listHtml
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
