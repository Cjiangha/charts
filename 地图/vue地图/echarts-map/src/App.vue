<template>
  <div id="app">
    <echarts-map></echarts-map>
  </div>
</template>
<script>
import EchartsMap from './views/EchartsMap.vue'

export default {
  name: 'App',
  components: {
    EchartsMap
  }
}
</script>

<style>
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}
</style>
