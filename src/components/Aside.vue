<template>
  <div>
    <div class="logo">广告服务</div>
    <el-menu
      unique-opened
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <div v-for="subMenu in menu">
        <el-submenu index="user">
          <template slot="title" style="padding-left: 1px;">
            <i class="fa fa-user"></i>
            <span slot="title" class="layout-text">{{subMenu.subMenuName}}</span>
          </template>
          <div v-for="item in subMenu.menuItems">
            <el-menu-item index="list" @click="handleClick(item.linkPath)">{{item.menuItemName}}</el-menu-item>
          </div>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [{
        subMenuName: '后台用户',
        menuItems: [{
          menuItemName: '用户列表',
          linkPath: '/',
        }, {
          menuItemName: '个人中心',
          linkPath: '/',
        }],
      }, {
        subMenuName: '系统设置',
        menuItems: [{
          menuItemName: '参数管理',
          linkPath: '/',
        }, {
          menuItemName: '兑换通知',
          linkPath: '/',
        }],
      }],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // eslint-disable-next-line
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // eslint-disable-next-line
      console.log(key, keyPath);
    },
    handleClick(item) {
      // eslint-disable-next-line
      console.log(item);
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
</style>
