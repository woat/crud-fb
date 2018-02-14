<template>
  <div id="app">
    <Navi />
    <router-view/>
  </div>
</template>

<script>
import Navi from '@/components/Navi'

export default {
  name: 'App',
  components: { Navi }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: grid;
  justify-content: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app > * {
  justify-self: center;
}
</style>
