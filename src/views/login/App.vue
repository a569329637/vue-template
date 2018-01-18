<template>
  <div id="app">
    <c-login/>
  </div>
</template>

<script>
// eslint-disable-next-line
import Login from '@/components/Login';

export default {
  components: {
    CLogin: Login,
  },
};
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
