<template>
   <div class="login">
      <div v-title>管理员登录</div>
   	  <div class="title">图灵智能交易管理系统</div>
   	  <div class="login-form">
         <ul class="switch">
           <li  class="active">管理员登录</li>
         </ul>
   	  	 <form class="password_form" >
   	  	 	<div class="required phone1_div">
            <img src="../../../assets/img/login_01.png">
   	  	 		<input type="text" name="phone1"  v-model="phone1" placeholder="请输入手机号" id="phone1">
   	  	 	</div>
   	  	 	<div class="required password_div">
            <img src="../../../assets/img/login_02.png">
   	  	 		<input type="password" name="password"  v-model="password" placeholder="请输入密码" id="password">
   	  	 	</div>
          <div id="login_message" class="error" v-show="empty1">
             {{message1}}
          </div>
   	  	 	<div class="login_div">
   	  	 		<input type="button" value="登录" id="submit1" @click="login1">
   	  	 		</input>
   	  	 	</div>
   	  	 </form>
         <!--<div class="register_div">
            <p class="register">还没有Turing账号？<a href="/system/register">立即注册</a></p>
         </div>-->
   	  </div>
   </div>	
</template>
<script>
	export default {
  name: 'Login',
  data () {
    return {
      // 密码登录
      phone1: '',
      password: '',
      repassword: false,
      empty1:false,
      message1:'请填写完整',
      // 验证码登录
      phone2: '',
      code: '',
      empty2:false,
      message2:'验证码输入错误',
      disabled: true,
      sendMessage: '发送短信验证码'
    }
  },
  mounted() {
    this.getUser();
  },
  watch:{
    phone2:function(){
      var self = this;
      var phoneReg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
      if(self.phone2 === ''||!phoneReg.test(self.phone2)){
         self.message2 = '请输入格式正确的手机号码';
         self.empty2 = true;
      }else{
         self.empty2 = false;
         self.disabled = false;
        //  self.$http({
        //       method: 'post',
        //       url: '/turingcloud/login/checkUserStatus?phone='+self.phone2
        //  }).then(function(res){
        //     if(res.data == '0'){
        //       self.empty = false;
        //       return false;
        //     }else if(res.data == '1'){
        //       self.message2 = '手机号码不存在,请先注册';
        //       self.empty2 = true;
        //     }else if(res.data == '2'){
        //       self.message2 = '资料未填写，请先填写资料';
        //       self.empty2 = true;
        //       self.$router.push('/add');
        //     }else if(res.data == '3'){
        //       self.message2 = '资料正在审核中';
        //       self.empty2 = true;
        //     }else if(res.data == '4'){
        //       self.message2 = '资料审核未通过，请重新填写资料';
        //       self.empty2 = true;
        //     }else{
        //       alert('Error');
        //     }
        //  }).catch(function(err){
        //     alert("AJAX失败");
        //  });
      }
    }
    // code:function(){
    //   if(self.code === ''){
    //     self.message2 = '请输入验证码';
    //     self.empty2 = true;
    //   }else{

    //   }
    // }
  },
  methods: {
    getUser() {
        var storage = window.localStorage; 
        var getPhone = storage["phone"]; 
        var getPwd = storage["password"]; 
        var getRepassword = storage["repassword"]; 
        if(( ("" != getPhone) ||(null != getPhone)) && (("" != getPwd) ||(null != getPwd)) && (typeof(getPhone)!== "undefined")&&(typeof(getPwd)!=="undefined")) {
          this.phone1 = getPhone;
          this.password = getPwd;
          this.repassword = getRepassword;
        }
    },
    login1 () {
      var self = this;
      self.empty1 = false;
      var phoneReg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
      var pswReg = /^\w{6,16}$/;
      if (self.phone1 === '' || self.password === '') {
        // alert('输入框不能为空')
         self.message1 = "请填写完整";
         self.empty1 = true;
         return false;
      }else if(!phoneReg.test(self.phone1)){
           self.message1 = "请输入正确的手机号码";
           self.empty1 = true;
           return false;
      }else if(!pswReg.test(self.password)){
           self.message1 = '请输入格式正确的密码（6-16位字母、数字和下划线）';
           self.empty1 = true;
           return false;
      }else {
        var storage = window.localStorage; 
        if(self.repassword){
          storage["phone"] = self.phone1; 
          storage["password"] = self.password; 
          storage["repassword"] =  self.repassword; 
        }else{
          storage.removeItem("phone");
          storage.removeItem("password");
          storage.removeItem("repassword");
        }
         // 此处加入后台AJAX验证
        self.$http({
              method: 'post',
              url: '/turingcloud/login/byPassword?phone='+self.phone1+'&password='+self.password
         }).then(function(res){
            if(res.data == '0'){
              alert('登录成功');
              self.$router.push('/system/home');
            }else if(res.data == '1'){
              alert('登录失败，用户名不存在');
            }else if(res.data == '2'){
              alert('登录失败，密码错误');
            }else if(res.data == '3'){
              alert('资料未填写，请先填写资料');
              self.$router.push('/add');
            }else if(res.data == '4'){
              alert('资料正在审核中');
            }else if(res.data == '5'){
              alert('资料审核未通过，请重新填写资料');
              self.$router.push('/system/add');
            }else{
              alert('Error');
            }
         }).catch(function(err){
            alert("AJAX失败");
         });
      }
    },
    // 发送验证码倒计时
    countDown(){
        var self = this;
        self.sendMessage = '重新发送(59)';
        var _step = 58;
        var _res = setInterval(function(){
            self.sendMessage = '重新发送('+_step+')';
            _step-=1;
            if(_step<=0){
                self.disabled = false;
                self.sendMessage = '发送短信验证码';
                clearInterval(_res);
            }else{
                  self.disabled = true;
            }
        },1000);
    },
     // 点击发送验证码
    sendCaptcha(){
        var self = this;
        var phoneReg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
        if (self.phone2 === '' || !phoneReg.test(self.phone2)) {
              self.message2 = '请输入格式正确的手机号码';
              self.empty2 = true;
              return false;
        } else {
              self.$http({
              method: 'post',
              url: '/turingcloud/login/checkUserStatus?phone='+self.phone2
         }).then(function(res){
            if(res.data == '0'){
              self.empty2 = false;
              self.$http({
                  method: 'post',
                  url: '/turingcloud/login/sendMsmCode?phone='+self.phone2
              }).then(function(res){
                self.countDown();
              }).catch(function(err){
                alert('运行错误');
              });
            }else if(res.data == '1'){
              self.message2 = '手机号码不存在,请先注册';
              self.empty2 = true;
            }else if(res.data == '2'){
              self.message2 = '资料未填写，请先填写资料';
              self.empty2 = true;
              self.$router.push('/add');
            }else if(res.data == '3'){
              self.message2 = '资料正在审核中';
              self.empty2 = true;
            }else if(res.data == '4'){
              self.message2 = '资料审核未通过，请重新填写资料';
              self.empty2 = true;
            }else{
              alert('Error');
            }
         }).catch(function(err){
            alert("AJAX失败");
         });
        }
    },
    // 短信验证码登录
    login2 () {
      var self = this;
      if(self.empty2 == true && self.code != ''){
        self.empty2 = false;
      }
      // self.empty2 = false;
      var phoneReg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
      if (self.phone2 === '' || self.code === '') {
        // alert('输入框不能为空')
         self.message2 = "请填写完整";
         self.empty2 = true;
         return false;
      }else if(!phoneReg.test(self.phone2)){
           self.message2 = "请输入正确的手机号码";
           self.empty2 = true;
           return false;
      }else {
           self.$http({
              method: 'post',
              url: '/turingcloud/login/checkUserStatus?phone='+self.phone2
          }).then(function(res){
            if(res.data == '0'){
              self.$http({
              method: 'post',
              url: '/turingcloud/login/byMsm?phone='+self.phone2+'&msm='+self.code
              }).then(function(res){
                  if(res.data == '0'){
                    alert('登录成功');
                    self.$router.push('/system/home');
                  }else if(res.data == '1'){
                    alert('登录失败，验证码失效');
                  }else if(res.data == '2'){
                    alert('登录失败，验证码错误');
                  }else{
                    alert('Error');
                  }
              }).catch(function(err){
                  alert("AJAX失败");
              });
            }else if(res.data == '1'){
              self.message2 = '手机号码不存在,请先注册';
              self.empty2 = true;
            }else if(res.data == '2'){
              self.message2 = '资料未填写，请先填写资料';
              self.empty2 = true;
              self.$router.push('/system/add');
            }else if(res.data == '3'){
              self.message2 = '资料正在审核中';
              self.empty2 = true;
            }else if(res.data == '4'){
              self.message2 = '资料审核未通过，请重新填写资料';
              self.empty2 = true;
            }else{
              alert('Error');
            }
         }).catch(function(err){
            alert("AJAX失败");
         });
         // 此处加入后台AJAX验证
        
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
ul,ol,li{
    list-style:none;
}
.login{
	position:relative;
	width:100%;
	height:100%;
	background:#324157;
      min-height:800px;
    min-width:500px;
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
}
.switch{
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #e8e8e8;
  height: 50px;
}
.switch li{
   display:inline-block;
   padding:0 5px;
   height:50px;
   line-height:50px; 
   color:#999;
   cursor:pointer;
}
.switch li.code_switch{
  margin-left:30px;
}
.switch li.active{
    color:#333;
    border-bottom:2px solid #000;
}
.login-form form{
  margin-top:40px;
  padding:0;
}
form div.phone1_div,form div.password_div{
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
#password,#phone1,#submit1{
  background-color:transparent;
  outline:0;
}
.phone1_div input,.password_div input{
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
.password_form .re a{
  float:right;
  color:#333;
}
.login_div input#submit1{
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
/*短信验证码*/
form div.phone2_div,form div.code_div{
  width:310px;
  font-size:14px;
  padding-right:20px;
  margin:10px auto;
  border:1px solid #d8d8d8;
  border-radius:20px;
  height:40px;
}
#code,#phone2,#submit2{
  background-color:transparent;
  outline:0;
}
.phone2_div input{
  width:240px;
  float:right;
  border-radius:4px;
  height:38px;
  line-height:38px;
}
.code_div input{
  width:120px;
  height:38px;
  line-height:38px;
  float:right;
}
#send{
  background:#fff;
  cursor:pointer;
  text-align:right;
}
#send:hover{
  color:#3175d1;
}
.code_form .re{
  text-align:right;
}
.code_form .re a{
  color:#333;
}
.login_div input#submit2{
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
#code_message{
  margin:10px;
  font-size:14px;
}
/*立即注册公用*/
.register_div p{
  text-align:center;
  margin:20px auto;
  color:#858b97;
  font-size:14px;
}
.register_div p a{
  color:#3175d1;
}
</style>
