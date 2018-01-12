<template>
  <div class="layout-header">
    <el-row type="flex">
      <el-col :span="1">
        <div class="tools">
          <i class="fa fa-align-justify"></i>
        </div>
      </el-col>
      <el-col :span="8" :offset="6">
      </el-col>
      <el-col :span="5" class="userinfo" :offset="6">
        <el-dropdown  trigger="click" @command="handleClick">
              <span class="userinfo-inner">
                  <span style="position: relative;display: block;margin:20px auto;float: left;color: #fff;" v-text="nickname"></span>
                  <img :src="headUrl" />
              </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="userCenter" style="text-align: left"><span>个人中心</span></el-dropdown-item>
            <el-dropdown-item command="setting" style="text-align: left"><span>设置</span></el-dropdown-item>
            <el-dropdown-item divided command="logout" style="text-align: left"><span>退出登录</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: 'nickname',
      headUrl: 'http://cdn.genefamily.com.cn/system_user.png',
      activeMenu: '',
      activeSubMenu: [],
    };
  },
  methods: {
    handleClick() {
    },
  },
};
</script>

<style scoped>
  .layout-header {
    height: 60px;
    background: #20a0ff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .tools {
    padding: 0px 23px;
    width: 14px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }

  .userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;
    position: relative;
  }

  .userinfo .userinfo-inner {
    text-align: right;
    float: right;
    cursor: pointer;
    color: #fff;
  }

  .userinfo .userinfo-inner img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }
</style>
