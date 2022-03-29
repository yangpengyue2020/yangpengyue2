<template>
  <div class="home">
    <el-container>
      <el-aside class = 'aside'>
        <el-menu
      background-color ="#222d32"
      text-color = "#fff"
      default-active="2"
      class="el-menu-vertical-demo"
      router
     >
      <el-menu-item  id = 'title'>
        <span class = 'title'>ElementUi管理后台</span>
      </el-menu-item>
      <el-menu-item >
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-folder-opened"></i>
          <span>文章管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1"><i class="el-icon-remove-outline"></i>文章列表</el-menu-item>
          <el-menu-item index="2-2"><i class="el-icon-remove-outline"></i>多层级路由</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>

      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main> 
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "HomeView",
  components: {
    
  },
};
</script>
<style  scoped>
  .aside{
    height:100vh;
    background:#222d32;
  }
  .aside #title{
    background:#0079d9 !important;
   
  }
</style>
