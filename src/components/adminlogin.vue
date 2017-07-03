<template>
   <div class="login">
<!--  canvas begin -->
<div class="can-ss" style="width:100%; height:100%;">
  <div id="canvas-warp" class="canvas-in">
    <div id="output"></div>
  </div>
</div>
<!-- canvas end --> 

<div class="main">
  <div class="header">
    <img src="../assets/logo.png">
    <span>管理后台登录</span>
  </div>
  <div class="content">
      <form>
              <label for="username">用户名</label>
              <el-input placeholder="用户名" name="username" ></el-input>
              <label for="password">密码</label>
              <el-input placeholder="密码" name="password" type="password"></el-input>
              <label for="code">验证码</label>
              <el-input placeholder="验证码" name="code"></el-input>
              <a class="captcha"><img src="../assets/China.png" alt="验证码" title="验证码"></a>
              <label class="checkbox"><input type="checkbox" name="remember">保持登录状态</label>
              <el-button type="warning">登录</el-button>
      </form>  

  </div>
</div>
   </div>	
</template>
<script>
  // import FSS from "../../static/js/FSS.js"
	export default {
  name: 'adminlogin',
  created: function(){
    // FSS("canvas-warp","output");
  },
	}
</script>
<!-- scoped  样式只对当前组件起作用 -->
<style scoped>
/*canvas背景图样式 begin*/
.can-ss{position:absolute;z-index:1;top:0px;background-color:#1252d4;-webkit-transition: background-color 400ms ease-in-out;-ms-transition: background-color 400ms ease-in-out;-o-transition: background-color 400ms ease-in-out;-moz-transition: background-color 400ms ease-in-out;transition: background-color 400ms ease-in-out;}
.canvas-in {height:100%;width: 100%;}
#output {opacity: 0.3;width: 100%;height:100%;-webkit-transition: all 400ms ease-in-out;-ms-transition: all 400ms ease-in-out;-o-transition: all 400ms ease-in-out;-moz-transition: all 400ms ease-in-out;transition: all 400ms ease-in-out;}
.color{width: 210px;height: 20px;margin: 0 auto;position: fixed;left: 50%;margin-left: -110px;bottom: 20px;}
.color li{float: left;margin: 0 5px;width: 20px;height: 20px;background: #ccc;box-shadow: 0 0 4px #FFF;list-style: none;cursor: pointer;}
.glys{ font-size:26px; font-weight:bold; color:#fff; padding-left:20px; line-height:38px; font-family:"微软雅黑";}
/*canvas背景图样式 end*/
.login{
  width:100%;
  height:100%;
  overflow:hidden;
}
.login .main{
  padding-top:8%;
  position:absolute;
  z-index:999;
  top:0;
  left:50%;
  margin-left:-210px;
}
.main .header{
  padding: 20px 30px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px
}
.header img{
  vertical-align:middle;
}
.header span{
    font-size: 26px;
    font-weight: bold;
    color: #fff;
    padding-left: 20px;
    line-height: 73px;
    font-family: "微软雅黑";
    height:73px;
    display:inline-block;
}
.main .content{
  width: 420px;
  margin: 0 auto;
  background-color: rgba(0,0,0,0.2);
}
.content form{
  padding:30px;
}
.content form label{
  display:block;
  text-align:left;
  color:#FFF;
  font-weight:700;
  font-size:14px;
  margin-bottom:5px;
}
.content form .el-input{
  margin-bottom:20px;
}
.content form a.captcha{
  display:block;
  margin-bottom:20px;
  text-align:left;
  height:35px;
}
.captcha img{
  height:100%;
  width:90px;
  border:1px solid #fff;
}
.content form .checkbox{
  color:#76838f;
  font-size:14px;
  font-weight:400;
  cursor:pointer;
  margin:10px 0;
}
.checkbox input{
  vertical-align:middle;
  margin-right:6px;
  position:relative;
  bottom:2px;
}
.content form button{
  width:100%;
  font-size:15px;
}
</style>
