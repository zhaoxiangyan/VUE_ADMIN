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
                            <p><span class="country">中国(+0086)</span> <input type="text" id="phone" placeholder="请输入手机号码" v-model="phone"></p>
                            <div class="error_div"><span class="error" v-show="error.phone1">*请输入正确的手机号码</span></div>
                            <p><input type="text" id="imgCode" placeholder="请输入图形验证码" v-model="img_code"> <img src="http://192.168.0.133/turingcloud/captcha/gen" id="veriImg" class="areaNum graph" onclick="this.src='http://192.168.0.133/turingcloud/captcha/gen?random='+Math.random()"></p>
                            <div class="error_div"><span class="error" v-show="error.img_code1">*图形验证码错误</span></div>
                            <p><input type="text" id="messageCode" placeholder="请输入短信验证码" v-model="code"> <input type="submit" v-model="sendMessage" :disabled='disabled' id="send" @click="sendCaptcha"></p>
                            <div class="error_div"><span class="error" v-show="error.code1">*短信验证码错误</span></div>
                            <div class="checked_div">
                                <input type="checkbox" id="checkbox" v-model="checked"> 同意并接受
                                <a href="/system/glhProtocol" class="" target="_blank">图灵用户协议</a>
                            </div>
                            <div class="phone-submit">
                                <input type="submit" id="submit" value="注册" v-if="checked" @click="register">
                                <input type="submit" id="submit" disabled="disabled" value="注册" v-else>
                            </div>
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
                phone: '',
                img_code: '',
                code:'',
                disabled: false,
                sendMessage: '发送短信验证码',
                checked:false,
                error: {
                    phone1:false,
                    img_code1:false,
                    code1:false
                }
            }
        },
        watch:{
            phone:function(){
                var self = this;
                var phoneReg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
                if(self.phone!=''&&phoneReg.test(self.phone)){
                    self.error.phone1 = false;
                }else{
                     self.error.phone1 = true;
                }
            },
            img_code:function(){
                /*var pswReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;*/
                var self = this;
                if(self.img_code.length!=4){
                   self.error.img_code1 = true;
                }else{
                this.$http({
                        method: 'post',
                        url: '/turingcloud/captcha/validate?captcha='+self.img_code,
                    }).then(function(res){
                       if(res.data.rcode == '0'){
                           self.error.img_code1 = false;
                       }else{
                           self.error.img_code1 = true;
                       }
                    }).catch(function(err){
                       alert("AJAX失败");
                    });  
                }
            }
        },
        methods: {
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
                if (self.phone === '' || !phoneReg.test(self.phone)) {
                     self.error.phone1 = true;
                     return false;
                } else if(self.error.img_code1 == true){
                      return false;
                } else {
                     self.$http({
                         method: 'post',
                         url: '/turingcloud/sendMsmCode?phone='+self.phone
                     }).then(function(res){
                        self.countDown();
                     }).catch(function(err){

                     });
                }
            },
            // 注册
            register() {
                var self = this;
                var phoneReg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
                if (self.phone === '' || !phoneReg.test(self.phone)) {
                     self.error.phone1 = true;
                     return false;
                } else if(self.error.img_code1 == true){
                      return false;
                } else {
                    self.$http({
                        method: 'post',
                        url: '/turingcloud/registerWithPhone?phone='+self.phone+'&msmCode='+self.code
                    }).then(function(res){
                       if(res.data.rcode == '0'||res.data.rcode == '1'){
                           alert('注册成功');
                           self.$router.push('/system/add');
                       }else if(res.data.rcode =='2'){
                           alert('账号已注册,资料审核中');
                       }else if(res.data.rcode == '3'){
                           alert('账号已注册,请登录');
                           self.$router.push('/system/login');
                       }else if(res.data.rcode == '4'){
                           alert('账号已注册,资料审核未通过，请重新填写个人资料');
                           self.$router.push('/system/add');
                       }else if(res.data.rcode == '6'){
                           alert('验证码过期,请重新发送验证码');
                       }else if(res.data.rcode == '7'){
                           alert('验证码错误,请重新填写');
                       }else{
                           alert('Error');
                       }
                    }).catch(function(err){
                       alert("AJAX失败");
                    });
                    // self.$router.push('/add')
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
    min-height:800px;
    min-width:500px;
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
    
}
.phone-register p{
    margin:10px 0;
    border:1px solid #ddd;
    padding:0 15px;
    border-radius:20px;
    background:#fff;
}
.phone-register div.error_div{
    text-align:left;
    padding-left:15px;
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
   display:none;
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