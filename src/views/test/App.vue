<template>
  <div id="app">
    <c-hello-world/>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld';

  export default {
    components: {
      CHelloWorld: HelloWorld,
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
