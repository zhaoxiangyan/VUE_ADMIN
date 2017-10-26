<template>
    <div class="register">
      <div v-title>注册</div>
        <div class="box">
            <div id="register_title">
                <span>注册</span>
            </div>
            <div class="register_div">
                <div class="register_box">
                    <!--<ul class="tab">
                        <li class="active">手机用户</li>
                        <li>邮箱用户</li>
                    </ul>-->
                    <div>
                        <div class="phone-register">
                            <!--手机用户注册-->
                            <p><span class="country">中国(+0086)</span> <input type="text" id="phone" placeholder="请输入手机号码"></p>
                            <div>
                            </div>
                            <p><input type="text" id="imgCode" placeholder="请输入图形验证码"> <img src="../../assets/img/guruvercode.jpg" id="veriImg" class="areaNum graph"></p>
                            <div>
                            </div>
                            <p><input type="text" id="messageCode" placeholder="请输入短信验证码"> <input type="submit" value="发送短信验证码" id="send"></p>
                            <div>
                            </div>
                            <p><input type="password" id="psw" placeholder="请输入密码"></p>
                            <div>
                            </div>
                            <p><input type="password" id="psw1" placeholder="请确认密码"></p>
                            <div>
                            </div>
                            <div class="checked_div"><input type="checkbox" id="checkbox"> 同意并遵守
                                <a href="/glhProtocol" class="" target="_blank">图灵用户协议</a>
                            </div>
                            <div class="phone-submit"><input type="submit" id="submit-register" disabled="disabled" value="注册"></div>
                        </div>
                        <!--邮箱用户注册-->
                        <div  class="email-register">
                            <p><input  type="text" placeholder="请输入邮箱" id="email" v-model="email"></p>
                            <div><span class="error" v-show="error.mail">*请输入有效的邮箱地址</span></div>
                            <p><input  type="password" placeholder="请输入密码" id="psw" v-model="password"></p>
                            <div><span class="error" v-show="error.psw">*密码由大小写字母和数字组成，长度为6~20位</span></div> 
                            <p><input  type="password" placeholder="请确认密码" id="psw1" v-model="password1"></p>
                            <div><span class="error" v-show="error.psw1">*两次密码不一致</span></div>
                            <div  class="checked-div">
                                <input  type="checkbox" id="checkbox" v-model="checked"> 同意并遵守
                                <a  href="/glhProtocol" class="" target="_blank">图灵用户协议</a>
                            </div> 
                            <input  type="submit" id="submit"  value="注册" v-if="checked" @click="register">
                            <input type="submit" id="submit" disabled="disabled" value="注册" v-else>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Register',
        data() {
            return {
                email: '',
                password: '',
                password1:'',
                checked:false,
                error: {
                    mail:false,
                    psw:false,
                    psw1:false
                }
            }
        },
        watch:{
            email:function(){
                var self = this;
                var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                if(self.email!=''&&emailReg.test(self.email)){
                    self.$http({
                        method: 'post',
                        // url:'/turingcloud/beforeRegister?email='+self.email
                        url: '/turingcloud/beforeRegister',
                        // headers: {'Content-Type':'application/json'},
                        data: {
                            "email": self.email
                        }
                    }).then(function(res){
                       if(res.data){
                           self.error.mail = false;
                       }else{
                           self.error.mail = true;
                       }
                    }).catch(function(err){
                      alert("AJAX失败");
                    });
                }else{
                     this.error.mail = true;
                }
            },
            password:function(){
                var pswReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
                if(this.password!=''&&pswReg.test(this.password)){
                     this.error.psw = false;
                }else{
                     this.error.psw = true;
                }
            },
            password1:function(){
                if(this.password!=''&&this.password==this.password1){
                    this.error.psw1 = false;
                }else{
                    this.error.psw1 = true;
                }
            }
        },
        methods: {
            register() {
                var self = this
                var emailReg =  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                var pswReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
                if (self.email === '' || !emailReg.test(self.email)) {
                     self.error.mail = true;
                     return false;
                } else if(self.password === '' || !pswReg.test(self.password)){
                      self.error.psw = true;
                      return false;
                } else if(self.password!==self.password1){
                      self.error.psw1 = true;
                      return false;
                } else {
                    this.$http({
                        method: 'post',
                        url: '/turingcloud/register?action=register&email='+self.email+'&password='+self.password
                        // url:'/turingcloud/register',
                        // data: {
                        //     "action":'register',
                        //     "email": self.email,
                        //     "password": self.password
                        // }
                    }).then(function(res){
                    //    alert(res);
                    //    console.log(res);
                       if(res.data == '0'){
                           alert('注册成功，未激活');
                       }else if(res.data =='1'){
                           alert('账号已经注册成功');
                       }else if(res.data == '2'){
                           alert('已经注册，未激活');
                       }else if(res.data == '3'){
                           alert('激活成功');
                       }else if(res.data == '4'){
                           alert('激活失败');
                       }else{
                           alert('出错');
                       }
                    }).catch(function(err){
                       alert("AJAX失败");
                    });
                    // self.$router.push('/login')
                    // alert('注册成功');
                }
            }
        }
    }
</script>
<!-- scoped  样式只对当前组件起作用 -->
<style scoped>
 * {
      box-sizing: border-box;
}
ul,ol,li{
    list-style:none;
}
.register{
    width:100%;
    height:100%;
    background:#324157;
}
.register div.box{
    width:420px;
    position:relative;
    margin:0 auto;
    background:#fff;
    border-radius:5px;
    border:1px solid #fff;
    top:160px;
}
#register_title{
    width:100%;
    text-align:center;
    border-bottom:1px solid #e8e8e8;
    height:50px;
}
#register_title span{
   display:inline-block;
   padding:0 5px;
   height:50px;
   line-height:50px; 
   color:#333;
   border-bottom:2px solid #000;
}
.register_div{
    width:420px;
    margin:0 auto;
    overflow:hidden;
}
.register_box{
    width:360px;
    /*min-height:370px;*/
    margin:0 auto;
    padding-bottom:40px;
    padding-top:20px;
}
.tab{
    width:220px;
    height:40px;
    margin:10px auto;
}
.tab li{
    display:inline-block;
    width:100px;
    text-align:center;
    line-height:40px;
    font-size:16px;
    cursor:pointer;
}
.tab li.active{
   color:#3175d1;
}
/*手机用户注册*/
.phone-register{
    display:none;
}
.phone-register p{
    margin:10px 0;
    border:1px solid #ddd;
    padding:0 15px;
    border-radius:20px;
    background:#fff;
}
.country{
    width:100px;
    color:#000;
}
#phone,.country{
    display:inline-block;
    height:40px;
    line-height:40px;
    font-size:14px;
}
#phone{
    width:220px;
}
#imgCode{
    width:150px;
    height:40px;
}
#imgCode,#send{
    display:inline-block;
    line-height:40px;
    font-size:14px;
}
.areaNum{
    margin-top:0;
    height:30px;
    width:165px;
    cursor:pointer;
    vertical-align:-10px;
    display:inline-block;
}
#messageCode,#nickname,#psw1,#psw{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    width: 100%;
}
#send{
    width:100px;
    float:right;
    background:#fff;
    cursor:pointer;
    text-align:right;
}
#send:disabled{
    color:#666;
}
#messageCode{
    width:220px;
}
.checked_div{
    padding-left:15px;
    font-size:14px;
    color:#666;
    margin:10px 0;
    text-align:left;
}
#checkbox{
    width:15px;
    height:15px;
    display:inline-block;
    background:#fff;
    vertical-align:-3px;
}
.checked_div a{
    color:#3175d1;
    font-size:14px;
}
.phone-submit{
    width:100%;
    height:40px;
}
#submit-register{
    line-height: 40px;
    display: inline-block;
    font-size: 16px;
    background: #3175d1;
    color: #fff;
    text-align: center;
    border-radius: 20px;
    border: 1px solid #fff;
    width: 100%;
    cursor: pointer;
}
#submit-register:disabled {
    background: #ddd;
    color: #999;
}
/*邮箱用户*/
.email-register{

}
.email-register p{
    margin:10px 0;
    border:1px solid #ddd;
    padding:0 15px;
    border-radius:20px;
    background:#fff;
}
#email,#nickname,#psw1,#psw,#submit{
    line-height: 38px;
    height: 38px;
    width: 100%;
    display: inline-block;
    font-size: 14px;
}
.checked-div{
    padding-left:15px;
    font-size:14px;
    color:#666;
    margin:10px 0;
    text-align:left;
}
.checked-div a{
    color:#3175d1;
    font-size:14px;
}
#submit{
    background: #3175d1;
    color: #fff;
    margin: 10px 0;
    border: 1px solid #ddd;
    padding: 0 15px;
    border-radius: 20px;
    line-height: 40px;
    height: 40px;
    font-size: 16px;
    width: 100%;
    cursor: pointer;
}
#submit:disabled {
    background: #ddd;
    color: #999;
}
.error{
    color:red;
    font-size:14px;
}
.email-register>div{
    text-align:left;
}
.email-register div span{
    padding:0 15px;
    display:inline-block;
}
</style>