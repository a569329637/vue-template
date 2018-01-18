<template>
  <div>
    <el-form ref="loginForm" :model="loginForm" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
      <h3 class="title">系统登录</h3>

      <el-form-item prop="account" :rules="[{required: true, message: '邮箱/手机号不能为空'},]">
        <el-input type="text" v-model="loginForm.phoneOrEmail" placeholder="邮箱/手机号"></el-input>
      </el-form-item>

      <el-form-item prop="checkPass" :rules="[{required: true, message: '密码不能为空'},]">
        <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
      </el-form-item>

      <el-checkbox checked class="remember">记住我</el-checkbox>

      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="submitForm" :loading="submitFormLoading">登录</el-button>
      </el-form-item>

      <el-form-item>
        <el-popover placement="top"
                    title="请使用微信扫码登录"
                    trigger="manual"
                    v-model="showQrCode">
          <el-button @click="clickShowQrCode" slot="reference" type="primary" style="width:100%;">
            微信扫码登录
          </el-button>
          <div class="impowerBox">
            <img class="qrcode lightBorder" :src="loginQrCode">
          </div>
        </el-popover>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        haveShowNotice: false,
        loginForm: {
          phoneOrEmail: '',
          password: '',
        },
        loginQrCode: '',
        uuid: '',
        submitFormLoading: false,
        showQrCode: false,
      };
    },
    methods: {
      submitForm() {

      },
      submitFormLoading() {

      },
      clickShowQrCode() {

      },
//      submitForm() {
//        var self = this;
//        Form.validate(this, 'loginForm', function (resp) {
//          self.submitFormLoding = true;
//          Resource.post("/password_login", {
//            phoneOrEmail: self.loginForm.phoneOrEmail,
//            password: self.loginForm.password
//          }, function (resp) {
//            self.submitFormLoding = false;
//            if (resp.code != 0) {
//              Message.error(resp.msg);
//              return;
//            }
//            Message.success("登录成功");
//            setTimeout(function () {
//              reloadPage();
//            }, 1000)
//          })
//
//        })
//      },
//      clickShowQrCode() {
//        var self = this;
//        if (this.showQrCode) {
//          if (!this.uuid) {
//            Message.error("参数错误");
//            return;
//          }
//          Resource.post("/stop_query", {uuid: this.uuid}, function (resp) {
//            self.showQrCode = false;
//            stopQuery();
//          })
//          return;
//        }
//        this.haveShowNotice = false;
//        this.getLoginUuid();
//      },
//      getLoginUuid: function () {
//        var self = this;
//        Resource.get("/get_login_uuid", {}, function (resp) {
//          self.loginQrCode = resp.data.loginQrCode
//          self.uuid = resp.data.uuid;
//          Vue.nextTick(function () {
//            self.showQrCode = true;
//            self.startQueryLogin()
//          })
//        })
//      },
//      startQueryLogin() {
//        var that = this;
//        Resource.get("/query_login", {uuid: this.uuid}, function (resp) {
//          if (resp.code == 101 || resp.code == 102) {
//            that.$notify({
//              title: '错误',
//              message: resp.msg + ",即将刷新页面",
//              type: 'error'
//            });
//            stopQuery();
//            setTimeout(function () {
//              reloadPage();
//            }, 1000)
//            return;
//          }
//          if (resp.code == 8) {
//            qrcode_login_query_timeout = setTimeout(that.startQueryLogin, 1000);
//            return;
//          }
//          if (resp.code == 9) {
//            if (!that.haveShowNotice) {
//              that.$notify({
//                title: '成功',
//                message: '微信已扫描',
//                type: 'success'
//              });
//              that.haveShowNotice = true;
//            }
//            qrcode_login_query_timeout = setTimeout(that.startQueryLogin, 1000);
//          }
//          if (resp.code == 2) {
//            that.$notify({
//              title: '提醒',
//              message: '该微信号尚未拥有登录权限，请联系网站管理人员',
//              type: 'warning'
//            });
//            Resource.post("/stop_query", {uuid: that.uuid}, function (resp) {
//              stopQuery();
//              that.haveShowNotice = false;
//              that.getLoginUuid();
//            })
//            return;
//          }
//          if (resp.code == 10 || resp.code == 0) {
//            that.$notify({
//              title: '成功',
//              message: '已确认登录',
//              type: 'success'
//            });
//            stopQuery();
//            setTimeout(function () {
//              reloadPage();
//            }, 1000)
//          }
//        });
//      }
    },
  };
</script>

<style scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login-container .title {
    margin: 0 auto 40px;
    text-align: center;
    color: #505458;
  }

  .login-container .remember {
    margin: 0 0 20px;
    float: left;
  }

  .impowerBox {
    line-height: 1.6;
    position: relative;
    width: 100%;
    z-index: 1;
    text-align: center;
  }

  .impowerBox .qrcode {
    width: 150px;
    height: 150px;
    margin-top: 15px;
    border: 1px solid #E2E2E2;
  }

</style>
