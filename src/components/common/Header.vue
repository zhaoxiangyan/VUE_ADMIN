<template>
        <div class="header">
            <div class="left">
                GQFX-CRM
            </div>
            <div class="center">
                <i class="el-icon-d-arrow-left" @click.prevent="collapse"></i>
            </div>
            <div class="right">
                  <el-dropdown trigger="hover">
                   <span class="el-dropdown-link">andy<img src="../../assets/user_photo.jpg"></span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>我的消息</el-dropdown-item>
                      <el-dropdown-item>设置</el-dropdown-item>
                      <el-dropdown-item divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                 </el-dropdown>  
            </div>
        </div>
</template>
<script>
    export default {
      name: 'header',  
      data () {
        return {
          name: 'linxin',
          collapsed:false
        }
      },
      methods: {
        //折叠导航栏
        collapse:function(){
          this.collapsed=!this.collapsed;
        }
      }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        background:#242f42;
    }
    .header .left{
        box-sizing:border-box;
        width:251px;
        height:70px;
        padding-left:20px;
        padding-right:20px;
        border-color:rgba(238,241,146,0.3);
        border-width:1px;
        border-right-style:solid;
        float:left;
    }
    .header .center{
        padding:0 23px;
        width:22px;
        height:70px;
        line-height:70px;
        cursor:pointer;
        float:left;
    }
    .header .right{
      float:right;
      padding-right:35px;
      text-align:right;
      position:relative;
      height:70px;
    }
    .right span{
      cursor:pointer;
      color:#fff;
      font-size:18px;
    }
    .right span img{
      width:50px;
      height:50px;
      border-radius:25px;
      margin:10px 0 10px 10px;
      float:right;
    }
    .right ul{
      margin: 5px 0;
      border: 1px solid #d1dbe5;
      box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.12);
      padding: 6px 0;
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
      min-width: 100px;
      background:#fff;
    }
    .right ul li{
      color:#000;
      font-size:14px;
      list-style: none;
      line-height: 36px;
      padding: 0 10px;
      margin: 0;
      cursor: pointer;
    }
</style>
