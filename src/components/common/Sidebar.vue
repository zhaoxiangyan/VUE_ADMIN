<template>
    <div class="sidebar">
         <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="home">
                <i class="el-icon-date"></i>主页
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>投资</template>
                <el-menu-item index="two"><i class="el-icon-message"></i>创建交易人账户</el-menu-item>
                <el-menu-item index="three"><i class="el-icon-message"></i>创建投资人账户</el-menu-item>
                <el-menu-item index="three"><i class="el-icon-message"></i>交易人评级</el-menu-item>
                <el-menu-item index="three"><i class="el-icon-message"></i>作为交易人我的统计数据</el-menu-item>
                <el-menu-item index="three"><i class="el-icon-message"></i>作为投资人我的统计数据</el-menu-item>
                <el-menu-item index="three"><i class="el-icon-message"></i>投资人们</el-menu-item>
                <el-menu-item index="three"><i class="el-icon-message"></i>我复制</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-date"></i>交易</template>
                <el-menu-item index="four"><i class="el-icon-message"></i>社会的</el-menu-item>
                <el-menu-item index="five"><i class="el-icon-message"></i>俱乐部</el-menu-item>
                <el-menu-item index="six"><i class="el-icon-message"></i>会员</el-menu-item>
                <el-menu-item index="seven"><i class="el-icon-message"></i>资金情况</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-star-on"></i>帮助</template>
                <el-menu-item index="eight"><i class="el-icon-message"></i>红红利奖励</el-menu-item>
                <el-menu-item index="nine"><i class="el-icon-message"></i>设置</el-menu-item>
            </el-submenu>
            <el-menu-item index="home">
                <i class="el-icon-circle-close"></i>登出
            </el-menu-item>    
        </el-menu> 
        <!--<ul>
        	<li></li>
        	<li></li>
        	<li></li>
        	<li>
        		<div>表单</div>
        		<ul>
        			<li>基本表单</li>
        			<li>编辑器</li>
        			<li>markdown</li>
        			<li>文件上传</li>
        		</ul>
        	</li>
        </ul>-->
    </div>
</template>

<script>
    export default {
      name: 'sidebar',
      computed: {
        onRoutes () {
          return this.$route.path.replace('/', '')
        }
      }
    }

</script>

<style scoped>
   .sidebar{
     display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom: 0;
    /*background: #2E363F;*/
    background:#324157;
   } 
   .sidebar>ul{
       height:100%;
       text-align:left;
   }
</style>
