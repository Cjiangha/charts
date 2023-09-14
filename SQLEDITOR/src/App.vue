<!--
 * @Author: 张飞青
 * @Description: 
 * @LastEditors: zhangfeiqing
 * @LastEditTime: 2022-10-25 09:57:06
 * Copyright (c) 2022 by ziroom, All Rights Reserved. 
-->
<template>
  <el-container>
      <el-container>
        <el-main>
          <SqlEditor @changeBottom="changeBottom" @error="errorListChange" />
        </el-main>
      </el-container>
    </el-container>
</template>
<script>
import SqlEditor from '@/components/SqlEditor';

export default {
  name: 'APP',
  components: {
    SqlEditor
  },
}
</script>

<style>
  body, html {
    height: 100%
  }
  .el-container {
    height: 100%
  }
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 30px !important;
  }
  
  .el-aside {
    background-color: #fff;
    color: #333;
    border-right: 1px solid #eee;
  }
  
  .el-main {
    position: relative;
    padding: 10px 16px 16px;
  }

  .el-footer {
    position: relative;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
 