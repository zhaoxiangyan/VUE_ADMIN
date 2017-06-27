<template>
   <div class="login">
   	  <div class="title">GQFX-CRM后台管理系统</div>
   	  <div class="login-form">
   	  	 <form>
   	  	 	<div class="required">
   	  	 		<input type="text" name="username" placeholder="username" v-model="username">
   	  	 	</div>
   	  	 	<div class="required">
   	  	 		<input type="password" name="password" placeholder="password" v-model="password">
   	  	 	</div>
   	  	 	<div>
   	  	 		<button type="button">
   	  	 			<a href="javascript:void(0)" @click="login">登录</a>
   	  	 		</button>
   	  	 	</div>
   	  	 	<p>Tips:用户名和密码必填</p>
   	  	 </form>
   	  </div>
   </div>	
</template>
<script>
	export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      var self = this
      if (self.username === '' || self.password === '') {
        alert('输入框不能为空')
        return false
      } else {
        self.$router.push('/home')
      }
    }
  }
	}
</script>
<!-- scoped  样式只对当前组件起作用 -->
<style scoped>
.login{
	position:relative;
	width:100%;
	height:100%;
	background:#324157;
}
.login .title{
	position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -230px;
    text-align: center;
    font-size: 30px;
    color: #fff;
}
.login .login-form{
	position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    height: 160px;
    margin: -150px 0 0 -190px;
    padding: 40px;
    border-radius: 5px;
    background: #fff;
}
form{}
form div.required{
	margin-bottom:22px;
}
.required input{
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
    /*padding: 10px 15px;*/
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
}
</style>
