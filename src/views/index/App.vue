<template>
  <div id="app">
    <el-row type="flex">
      <el-col :span="3">
        <c-aside/>
      </el-col>
      <el-col :span="21">
        <c-header/>
        <c-main/>
        <c-footer/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Aside from '@/components/Aside';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default {
  components: {
    CAside: Aside,
    CHeader: Header,
    CMain: Main,
    CFooter: Footer,
  },
};
</script>
