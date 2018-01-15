<template>
  <div class="layout-content">
    <div class="layout-content-main">
      <iframe :src="frameSrc" id="mainframe" frameborder="0" ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    frameSrc() {
      return this.$store.state.Menu.frameSrc;
    },
  },
};
</script>

<style scoped>
  .layout-content {
    height: 100%;
    margin: 10px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    display: block;
    position: relative;
    height: 100%;
    /*width: 100%;*/
    padding: 10px;
  }

  #mainframe {
    width: 100%;
    height: 100%;
  }
</style>
