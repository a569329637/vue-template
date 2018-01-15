<template>
  <div>
    <div class="logo">广告服务</div>
    <el-menu
      unique-opened
      :default-active="selectMenuItemIndex"
      class="el-menu-vertical-demo">
      <div v-for="subMenu in menus">
        <el-submenu :index="subMenu.index">
          <template slot="title" style="padding-left: 1px;">
            <i class="el-icon-menu"></i>
            <span slot="title" class="layout-text">{{subMenu.subMenuName}}</span>
          </template>
          <div v-for="item in subMenu.menuItems">
            <el-menu-item :index="item.index" @click="handleMenuItemClick(item)">{{item.menuItemName}}</el-menu-item>
          </div>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  computed: {
    menus() {
      return this.$store.state.Menu.menus;
    },
    selectMenuItemIndex() {
      return this.$store.state.Menu.selectMenuItemIndex;
    },
  },
  methods: {
    handleMenuItemClick(item) {
      this.$store.commit('update_frameSrc', item);
      this.$store.commit('update_selectMenuItemIndex', item);
    },
  },
};
</script>

<style scoped>
  .logo {
    height: 60px;
    font-size: 22px;
    padding-left: 20px;
    padding-right: 20px;
    border-color: rgba(238, 241, 146, 0.3);
    border-right-width: 1px;
    border-right-style: solid;
    line-height: 60px;
    color: #fff;
    background: #20a0ff;
    transition: all 0.5s ease-out;
  }

  .el-menu-vertical-demo {
    text-align: left;
    height: 100vh;
  }
</style>
