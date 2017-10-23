<template>
   <div class="login">
      <div v-title>登录</div>
   	  <div class="title">Turing-CRM后台管理系统</div>
   	  <div class="login-form">
   	  	 <form>
   	  	 	<div class="required username_div">
            <img src="../../assets/img/login_01.png">
   	  	 		<input type="text" name="username"  v-model="username" placeholder="请输入邮箱">
   	  	 	</div>
   	  	 	<div class="required password_div">
            <img src="../../assets/img/login_02.png">
   	  	 		<input type="password" name="password"  v-model="password" placeholder="请输入密码">
   	  	 	</div>
          <div class="re">
            <label for="keepPwd"><input type="checkbox" id="keepPwd" v-model="repassword">记住密码</label>
            <a href="/findpwd">忘记密码？</a>
          </div>
   	  	 	<div class="login_div">
   	  	 		<input type="button" value="登录" id="submit" @click="login">
   	  	 		</input>
   	  	 	</div>
          <div id="login_message" class="error" v-show="empty">
             {{message}}
          </div>
          <div class="register_div">
             <p class="register">还没有Turing账号？<a href="/register">立即注册</a></p>
          </div>
   	  	 </form>
   	  </div>
   </div>	
</template>
<script>
	export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      repassword: false,
      empty:false,
      message:'请填写完整'
    }
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
        var storage = window.localStorage; 
        var getUsername = storage["username"]; 
        // alert(getUsername);
        var getPwd = storage["password"]; 
        var getRepassword = storage["repassword"]; 
        if(( ("" != getUsername) ||(null != getUsername)) && (("" != getPwd) ||(null != getPwd)) && (typeof(getUsername)!== "undefined")&&(typeof(getPwd)!=="undefined")) {
          this.username = getUsername;
          this.password = getPwd;
          this.repassword = getRepassword;
        }
    },
    login () {
      var self = this;
      var emailReg =  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (self.username === '' || self.password === '') {
        // alert('输入框不能为空')
         self.message = "请填写完整";
         self.empty = true;
        return false
      }else if(!emailReg.test(self.username)){
           self.message = "请输入正确的邮箱地址";
      } else {
        var storage = window.localStorage; 
        if(self.repassword){
          storage["username"] = self.username; 
          storage["password"] =  self.password; 
          storage["repassword"] =  self.repassword; 
        }else{
          storage.removeItem("username");
          storage.removeItem("password");
          storage.removeItem("repassword");
        }
         // 此处加入后台AJAX验证
        // this.$http({
        //       method: 'post',
        //       // url: '/api/turingcloud/beforeRegister',
        //       // headers: ['Accept': '*/*'],
        //       url: 'http://192.168.0.133/turingcloud/beforeRegister',
        //       data: {
        //         email: self.username
        //       }
        //  }).then(function(res){
        //    alert("成功");
        //  }).catch(function(err){
        //    alert("失败");
        //  });
        this.$http.get('/api/turingcloud/beforeRegister?email='+self.username)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
        // self.$router.push('/home')
      }
    }
  }
	}
</script>
<!-- scoped  样式只对当前组件起作用 -->
<style scoped>
*{
  box-sizing:border-box;
}
.login{
	position:relative;
	width:100%;
	height:100%;
	background:#324157;
}
.login .title{
  	position: absolute;
    top: 150px;
    width: 100%;
    /*margin-top: -230px;*/
    text-align: center;
    font-size: 30px;
    color: #fff;
}
/*.login .login-form{
	position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    height: 160px;
    margin: -150px 0 0 -190px;
    padding: 40px;
    border-radius: 5px;
    background: #fff;
}*/
.login .login-form{
    width: 456px;
    background-color: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 8px rgba(0,0,0,.33);
    transition: all .3s ease;
    position: absolute;
    font-family: Helvetica,Arial,sans-serif;
    top: 250px;
    left: 0;
    right: 0;
    margin: auto;
    padding-top:30px;
}
/*form div.required{
	margin-bottom:22px;
}*/
form div.username_div,form div.password_div{
  width:310px;
  font-size:14px;
  padding-right:20px;
  margin:10px auto;
  border:1px solid #d8d8d8;
  border-radius:20px;
  height:40px;
}
form div img{
  margin:10px 10px 0 20px;
}
#password,#username,#submit{
  background-color:transparent;
  outline:0;
  height:30px;
}
.username_div input,.password_div input{
  width:240px;
  float:right;
  border-radius:4px;
  height:38px;
  line-height:38px;
}
form div.re{
  width:310px;
  margin:15px auto;
  padding:0 10px;
  text-align:left;
  font-size:14px;
}
.re label{
  color:#858b97;
}
.re input{
  width:13px;
  height:13px;
  margin-right:5px;
  display:inline-block;
  vertical-align:-2px;
}
.re a{
  float:right;
  color:#333;
}
.login_div input#submit{
  width:315px;
  display:block;
  margin:0 auto 8px;
  background-color:#3175d1;
  color:#fff;
  border-radius:20px;
  height:40px;
  border:0;
  cursor:pointer;
  font-size:14px;
}
.error{
  color:red;
}
#login_message{
  margin:10px;
  font-size:14px;
}
p.error{
  text-align:center;
}
.register_div p{
  text-align:center;
  margin:20px auto;
  color:#858b97;
  font-size:14px;
}
.register_div p a{
  color:#3175d1;
}
/*.required input{
	font-size:14px;
	-webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
    color: #1f2d3d;
    display: block;
    height: 36px;
    line-height: 1;
    outline: 0;
    padding: 3px 10px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
.required input:hover{
	border-color:#8391a5;
}
.required input:focus{
	outline:0;
	border-color:#20a0ff;
}
form div:not(.required){
	text-align: center;
}
form div button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #bfcbd9;
    color: #1f2d3d;
    margin: 0;
    padding: 10px 15px;
    border-radius: 4px;
    width:100%;
    height:36px;
    color:#fff;
    background:#20a0ff;
    border-color:#20a0ff;
}
form div button:focus{
	outline:0;
}
form div button:hover{
	background:#4db3ff;
	border-color:#4db3ff;
	color:#fff;
}
form div button a{
	line-height:36px;
	display:block;
    color:#fff;
}
form p{
	font-size:12px;
	line-height:30px;
	color:rgb(153, 153, 153);
	text-align: left;
}*/
</style>
