<template>
  <el-row type="flex">
    <el-col :span="3">
      <c-aside/>
    </el-col>
    <el-col :span="21">
      <c-header/>
    </el-col>
  </el-row>
</template>

<script>
import Aside from '@/components/Aside';
import Header from '@/components/Header';

export default {
  components: {
    CAside: Aside,
    CHeader: Header,
  },
};
</script>
