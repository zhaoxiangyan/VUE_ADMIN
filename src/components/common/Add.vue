<template>
    <div class="add">
      <div v-title>填写个人资料</div>
        <div class="box">
            <div id="add_title">
                <span>个人资料</span>
            </div>
            <div class="add_div">
                <div class="add_box">
                    <div>
                        <div class="add_personal">
                            <!--用户个人信息填写--> 
                            <!--<form action="http://192.168.0.133/turingcloud/fillInfor" method="post" enctype="multipart/form-data" accept-charset="utf-8" onsubmit="document.charset='utf-8';">-->
                           <!--<form @submit.prevent="confirm" enctype="multipart/form-data">-->
                           <form  @submit.prevent="confirm">
                            <p><span class="input_title">姓名：</span> <input class="input_content" type="text" id="name" placeholder="请输入真实姓名" v-model="name" name="username"></p>
                            <div><span class="error" v-show="error.name1">*请输入正确的姓名</span></div>
                            <p><span class="input_title">身份证号码：</span> <input class="input_content" type="text" id="card" placeholder="请输入身份证号码" v-model="card" name="idcard"></p>
                            <div><span class="error" v-show="error.card1">*请输入正确的身份证号码</span></div>
                            <p><span class="input_title">邮箱：</span> <input class="input_content" type="text" id="email" placeholder="请输入邮箱" v-model="email" name="email"></p>
                            <div><span class="error" v-show="error.email1">*请输入正确的邮箱</span></div>
                            <p><span class="input_title">MT4账号：</span> <input class="input_content" type="text" id="mt4" placeholder="请输入MT4账号" v-model="mt4" name="account"></p>
                            <div><span class="error" v-show="error.mt41">*请输入MT4账号</span></div>
                            <p><span class="input_title">MT4密码：</span> <input class="input_content" type="password" id="password" placeholder="请输入登录密码" v-model="password" name="password"></p>
                            <div><span class="error" v-show="error.password1">*请输入格式正确的密码（6-16位字母、数字和下划线）</span></div>
                            <p><span class="input_title">确认MT4密码：</span> <input class="input_content" type="password" id="repassword" placeholder="请再次输入登录密码" v-model="repassword"></p>
                            <div><span class="error" v-show="error.repassword1">*两次密码不一致</span></div>
                            <p class="file_box">
                               <span class="input_title">身份证正面：</span>
                               <a href="javascript:void(0)">{{file_name1}}</a>
                               <input class="input_content" type="file" name='idcardPic' id="file1" @change="uploadCard1()" accept="image/png, image/jpeg, image/gif, image/jpg" >
                            </p>
                            <!--如果在input file标签里写成accept='image/*'会造成点击按钮后等待时间稍长-->
                            <div>
                                <img id="img1" >
                                <span class="error" v-show="error.file11">*请上传身份证正面照</span>
                            </div>
                            <p class="file_box">
                                <span class="input_title">身份证反面：</span>
                                <a href="javascript:void(0)">{{file_name2}}</a>
                                <input class="input_content" type="file" name='idcardPic' id="file2" @change="uploadCard2()" accept="image/png, image/jpeg, image/gif, image/jpg">
                            </p>
                            <div>
                                <img id="img2" >
                                <span class="error" v-show="error.file21">*请上传身份证反面照</span>
                                <span class="tips">注意事项：上传的单张图片大小不要超过2M；否则影响审核！</span>
                            </div>
                            <div class="checked_div">
                                <input type="checkbox" id="checkbox" v-model="checked"> 同意并接受
                                <a href="/system/glhProtocol" class="" target="_blank">图灵用户协议</a>
                            </div>
                            <div class="phone-submit">
                                <input type="submit" id="submit" value="确认提交" v-if="checked" >
                                <input type="submit" id="submit" disabled="disabled" value="确认提交" v-else>
                            </div>
                           </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Add',
        data() {
            return {
                name: '',
                card: '',
                mt4: '',
                email: '',
                password: '',
                repassword: '',
                file_name1:'点击选择图片上传',
                file1: false,
                file_name2:'点击选择图片上传',
                file2: false,
                checked:false,
                error: {
                    name1:false,
                    card1:false,
                    mt41:false,
                    email1:false,
                    password1:false,
                    repassword1:false,
                    file11:false,
                    file21:false
                }
            }
        },
        mounted: function () {
               var self = this;
               self.$http({
                        method: 'post',
                        url: '/turingcloud/checkUserStatus'
                        // headers: { "Content-Type": "multipart/form-data;charset=UTF-8"},
                        // headers: { 'Content-Type': 'application/json;charset=UTF-8'},
                    }).then(function(res){
                        if(res.data == '0'){
                            console.log('用户已注册，请填写资料');
                        }else if(res.data == '1'){
                            alert('请先注册手机号码');
                            self.$router.push('/system/register');
                        }else{
                            alert('Error');
                        }
                    }).catch(function(err){
                       alert("AJAX失败");
                    }); 
        },
        watch:{
            name:function(){
               var self = this;
               var nameReg = /^[\u4e00-\u9fa5]{2,4}$/;
                if(self.name === '' || !nameReg.test(self.name)){
                     self.error.name1 = true;
                }else{
                    self.error.name1 = false;
                }
            },
            card:function(){
               var self = this;
               var cardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                if(self.card === '' || !cardReg.test(self.card)){
                     self.error.card1 = true;
                }else{
                    self.error.card1 = false;
                }
            },
            mt4:function(){
                var self = this;
                if(self.mt4 === ''|| self.mt4 === 'null' ){
                     self.error.mt41 = true;
                }else{
                    self.error.mt41 = false;
                }
            },
            email:function(){
                var self = this;
                var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                if(self.email === '' || !emailReg.test(self.email)){
                     self.error.email1 = true;
                }else{
                    self.error.email1 = false;
                }
            },
            password:function(){
                 var self = this;
                 var pswReg = /^\w{6,16}$/;
                if(self.password === '' || !pswReg.test(self.password)){
                     self.error.password1 = true;
                }else{
                    self.error.password1 = false;
                }
            },
            repassword:function(){
                  var self = this;
                if(self.password!==self.repassword){
                     self.error.repassword1 = true;
                }else{
                    self.error.repassword1 = false;
                }
            },
            file1:function(){
                  var self = this;
                if(self.file1 == false){
                     self.error.file11 = true;
                }else{
                    self.error.file11 = false;
                }
            },
            file2:function(){
                 var self = this;
                if(self.file2 == false){
                     self.error.file21 = true;
                }else{
                    self.error.file21 = false;
                }
            }
        },
        methods: {
            uploadCard1(){
                var self = this;
                var reader = new FileReader();
                var file = document.getElementById("file1").files[0];
                self.file_name1 = file.name;
                //读取文件过程方法
                reader.onload = function (e) {
                    console.log("成功读取....");
                    var img = document.getElementById("img1");
                    img.style.display = 'inline-block';
                    img.src = e.target.result;
                    self.file1 = true;
                    //或者 img.src = this.result;  //e.target == this
                }
                reader.readAsDataURL(file)
            },
            uploadCard2(){
                var self = this;
                var reader = new FileReader();
                var file = document.getElementById("file2").files[0];
                self.file_name2 = file.name;
                //读取文件过程方法
                reader.onload = function (e) {
                    console.log("成功读取....");
                    var img = document.getElementById("img2");
                    img.style.display = 'inline-block';
                    img.src = e.target.result;
                    self.file2 = true;
                    //或者 img.src = this.result;  //e.target == this
                }
                reader.readAsDataURL(file)
            },
            confirm() {
                var self = this;
                // var nameReg = /^([\u4E00-\u9FA5]{2,}+|[a-zA-Z]+)$/;
                var nameReg = /^[\u4e00-\u9fa5]{2,4}$/;
                var cardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                var pswReg = /^\w{6,16}$/;
                if(self.name === '' || !nameReg.test(self.name)){
                     self.error.name1 = true;
                     return false;
                } else if(self.card === '' || !cardReg.test(self.card)){
                     self.error.card1 = true;
                     return false;
                } else if(self.mt4 === ''|| self.mt4 === 'null'){
                    self.error.mt41 = true;
                    return false;
                } else if (self.email === '' || !emailReg.test(self.email)) {
                     self.error.email1 = true;
                     return false;
                } else if(self.password === '' || !pswReg.test(self.password)){
                      self.error.password1 = true;
                      return false;
                } else if(self.password!==self.repassword){
                      self.error.repassword1 = true;
                      return false;
                } else if(self.file1 == false){
                      self.error.file11 = true;
                      return false;
                } else if(self.file2 == false){
                      self.error.file21 = true;
                      return false;
                } else {
                    var image = new FormData();
                    image.append('username',self.name);
                    image.append('idcard',self.card);
                    image.append('account',self.mt4);
                    image.append('email',self.email);
                    image.append('password',self.password);
                    image.append('idcardPic',document.getElementById("file1").files[0]);
                    image.append('idcardPic',document.getElementById("file2").files[0]);
                    self.$http({
                        method: 'post',
                        url: '/turingcloud/fillInfor',
                        // headers: { "Content-Type": "multipart/form-data;charset=UTF-8"},
                        // headers: { 'Content-Type': 'application/json;charset=UTF-8'},
                        data:image
                    }).then(function(res){
                    //    alert(res.data);
                        if(res.data == '0'){
                            alert('资料提交成功，请等待审核');
                            self.$router.push('/system/login');
                        }else if(res.data == '1'){
                            alert('请先注册手机号码');
                            self.$router.push('/system/register');
                        }else if(res.data == '2'){
                            alert('身份证上传错误，请重新上传');
                            return false;
                        }else{
                            alert('Error');
                        }
                    }).catch(function(err){
                       alert("AJAX失败");
                    });
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
.add{
    width:100%;
    /*height:100%;*/
    background:#324157;
    /*min-height:800px;*/
    /*min-height:1100px;*/
    min-height:100%;
    min-width:450px;
    padding:60px 0;
}
.add div.box{
    width:420px;
    /*position:relative;*/
    margin:0px auto;
    background:#fff;
    border-radius:5px;
    border:1px solid #fff;
    /*top:60px;*/
}
#add_title{
    width:100%;
    text-align:center;
    border-bottom:1px solid #e8e8e8;
    height:50px;
}
#add_title span{
   display:inline-block;
   padding:0 5px;
   height:50px;
   line-height:50px; 
   color:#333;
   border-bottom:2px solid #000;
}
.add_div{
    width:420px;
    margin:0 auto;
    overflow:hidden;
}
.add_box{
    width:360px;
    /*min-height:370px;*/
    margin:0 auto;
    padding:20px 0;
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
.add_personal{
    
}
.add_personal p{
    margin:10px 0;
    border:1px solid #ddd;
    padding:0 15px;
    border-radius:20px;
    background:#fff;
}
.input_title{
    width:100px;
    color:#000;
}
.input_title{
    display:inline-block;
    height:40px;
    line-height:40px;
    font-size:14px;
    text-align:right;
}
.input_content{
    display:inline-block;
    height:40px;
    line-height:40px;
    font-size:14px;
    width:220px;
}
#img1,#img2{
    display:none;
    max-width:100%;
    max-height:150px;
}
.file_box{
    position:relative;
}
.file_box input{
    opacity:0;
}
.file_box a{
    position:absolute;
    color:#3175d1;
    display:inline-block;
    width:220px;
    height:40px;
    text-align:left;
    line-height:40px;
    font-size:15px;
}
span.tips{
    display:block;
    font-size:14px;
    text-align:left;
    color: #76838f;
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
}
#submit{
    display: inline-block;
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

</style>