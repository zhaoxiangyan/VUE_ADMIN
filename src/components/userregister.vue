<template>
<div class="userregister">
<!-- 头部导航内容块 -->
   <div class="nav">
       <div class="nav_header" v-bind:class="[ collapsestate ? '' : 'width90']">
           <div class="nav_brand">
              <img class="nav_brand_logo" src="../assets/logo.png" >
           </div>
       </div>
       <div class="nav_container clearfix" v-bind:class="[ collapsestate ? '' : 'margin-left90']">
           <ul class="nav_toolbar">
               <li id="toggleMenubar" @click.prevent="changecollapse"><a><i class="fa" v-bind:class="[ collapsestate ? 'fa-arrow-left' : 'fa-bars']" ></i></a></li>
               <li v-if="fullscreen" id="toggleFullscreen" @click="fullScreen()"><a><i class="fa fa-arrows-alt"></i></a></li>
               <li v-else @click="cancelFullScreen()"><a><i class="fa fa-compress"></i></a></li>
               <li class="dropdown">
                  <a id="toggleQuick" @click="togglestate=!togglestate">{{$t("Userregister.text[1]")}}<i class="fa fa-angle-down"></i></a>
                  <span v-show="togglestate">
                        <div><i class="fa fa-angle-right"></i><router-link to="/userlogin">{{$t("Userregister.text[2]")}}</router-link></div>
                        <div><i class="fa fa-angle-right"></i><router-link to="/userregister">{{$t("Userregister.text[3]")}}</router-link></div>
                  </span>
               </li>
           </ul>
           <el-dropdown class="language fr" trigger="click">
                    <span class="el-dropdown-link"><img :src='$t("Language.src")'>{{$t("Language.value")}}</span>
                    <el-dropdown-menu class="language_box"  slot="dropdown">
                      <el-dropdown-item @click.native="ll('cn')"><img src="../assets/China.png">简体中文</el-dropdown-item>
                      <el-dropdown-item @click.native="ll('ja')"><img src="../assets/Japan.png">日本語</el-dropdown-item>
                      <el-dropdown-item @click.native="ll('en')"><img src="../assets/English.png" >English</el-dropdown-item>
                    </el-dropdown-menu>
            </el-dropdown>
       </div>
   </div>
   <!--左边折叠导航栏-->
   <div class="left_collapse" v-bind:class="[ collapsestate ? '' : 'width90']">
        <ul v-show="collapsestate">
           <li>{{$t("Userregister.text[0]")}}</li>
        </ul>
   </div>
   <!--注册表单内容块-->
   <div class="content" v-bind:class="[ collapsestate ? '' : 'margin-left90']">
        <div class="content_title">
           <h1>{{$t("Userregister.text[4]")}}</h1>
           <el-breadcrumb separator="/">
                <el-breadcrumb-item>{{$t("Userregister.text[5]")}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{$t("Userregister.text[4]")}}</el-breadcrumb-item>
           </el-breadcrumb>
        </div>
        <div class="main">
          <form>
             <h3 class="form_title">{{$t("Userregister.text[4]")}}</h3>
             <div class="form_body">
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6">*{{$t("Userregister.label[0]")}}:</el-col>
                    <el-col :sm="16" :md="14" :lg="12">
                       <el-input name="username" placeholder="username"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6">*{{$t("Userregister.label[1]")}}:</el-col>
                    <el-col :sm="16" :md="14" :lg="12">
                       <el-input name="parentid" placeholder="parentid"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6">*{{$t("Userregister.label[2]")}}:</el-col>
                    <el-col :sm="16" :md="14" :lg="12">
                       <el-input name="identifier" placeholder="identifier"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6">*{{$t("Userregister.label[3]")}}:</el-col>
                    <el-col :sm="16" :md="14" :lg="12">
                       <el-input name="mobile" placeholder="mobile"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6">*{{$t("Userregister.label[4]")}}:</el-col>
                    <el-col :sm="16" :md="14" :lg="12">
                       <el-input name="email" placeholder="email"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6">*{{$t("Userregister.label[5]")}}:</el-col>
                    <el-col :sm="16" :md="14" :lg="12">
                        <el-select v-model="value" placeholder="country" style="width:100%;" name="country">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6">*{{$t("Userregister.label[6]")}}:</el-col>
                    <el-col :sm="16" :md="14" :lg="12">
                       <el-input name="province" placeholder="province"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6">*{{$t("Userregister.label[7]")}}:</el-col>
                    <el-col :sm="16" :md="14" :lg="12">
                       <el-input name="city" placeholder="city"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6">*{{$t("Userregister.label[8]")}}:</el-col>
                    <el-col :sm="16" :md="14" :lg="12">
                       <el-input name="town" placeholder="town"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6">*{{$t("Userregister.label[9]")}}:</el-col>
                    <el-col :sm="16" :md="14" :lg="12">
                       <el-input name="address" placeholder="address"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6">*{{$t("Userregister.label[10]")}}:</el-col>
                    <el-col :sm="16" :md="14" :lg="12">
                       <el-input type="password" name="password" placeholder="password"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6">*{{$t("Userregister.label[11]")}}:</el-col>
                    <el-col :sm="16"  :md="14" :lg="12">
                       <el-input type="password" name="repassword" placeholder="repassword"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6">*{{$t("Userregister.label[12]")}}:</el-col>
                    <el-col :sm="16" :md="14" :lg="12">
                        <el-upload 
                        class="upload-demo fl"
                        drag name="image1"
                        action="https://jsonplaceholder.typicode.com/posts/">
                        <div class="el-upload__text">{{$t("Userregister.formtext[0]")}}<em>{{$t("Userregister.formtext[1]")}}</em></div>
                        </el-upload>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6" >*{{$t("Userregister.label[13]")}}:</el-col>
                    <el-col :sm="16" :md="14" :lg="12">
                        <el-upload 
                        class="upload-demo fl"
                        drag name="image2"
                        action="https://jsonplaceholder.typicode.com/posts/">
                        <div class="el-upload__text">{{$t("Userregister.formtext[0]")}}<em>{{$t("Userregister.formtext[1]")}}</em></div>
                        </el-upload>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8"  :md="10" :lg="6">*</el-col>
                    <el-col :sm="16" :md="14" :lg="12" style="text-align:left;">
                    {{$t("Userregister.formtext[2]")}}!
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6"></el-col>
                    <el-col :sm="16"  :md="14" :lg="12" style="text-align:left;">
                     <el-checkbox v-model="checked" name="agree">{{$t("Userregister.formtext[3]")}}</el-checkbox>
                     <a href="javascript:void(0);" style="color:red;font-size:14px;">{{$t("Userregister.formtext[4]")}}</a>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="8" :md="10" :lg="6"></el-col>
                    <el-col :sm="16" :md="14" :lg="12" style="text-align:left;">
                       <el-button type="primary" style="width:130px;">{{$t("Userregister.formtext[5]")}}</el-button>
                    </el-col>
                 </el-row>
             </div>
          </form>
        </div>
   </div>
</div>
</template>

<script>
    import VueI18n from 'vue-i18n'
    import i18n from '../vueI18n/i18n.js'
export default {
    name: 'userregister',
    data () {
       return {
        //  国家选择模拟数据  
          options: [{
          value: '选项1',
          label: 'China'
        }, {
          value: '选项2',
          label: 'Japan'
        }, {
          value: '选项3',
          label: 'English'
        }, {
          value: '选项4',
          label: 'America'
        }, {
          value: '选项5',
          label: 'New Zealand'
        }],
        value: '',
        // 身份证上传
        imageUrl: '',
        // 勾选框数据
        checked: true,
        // 快捷导航展开隐藏
        togglestate: false,
        // 控制全屏状态
        fullscreen: true,
        // 左边导航栏折叠
        collapsestate: true
      } 
    },
    methods: {
        // 语言切换
        ll: function(n){
          i18n.locale = n;
        },
        // 左边导航栏折叠
        changecollapse: function(){
           this.collapsestate = !this.collapsestate;
        },
        // 全屏
        fullScreen: function() { 
            if(document.documentElement.requestFullScreen) { 
            document.documentElement.requestFullScreen(); 
            } else if(document.documentElement.webkitRequestFullScreen ) { 
            document.documentElement.webkitRequestFullScreen(); 
            } else if(document.documentElement.mozRequestFullScreen) { 
            document.documentElement.mozRequestFullScreen(); 
            } else if(document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();    
            }
            this.fullscreen = !this.fullscreen;
        },
        // 退出全屏
        cancelFullScreen: function() { 
            if(document.exitFullscreen) { 
            document.exitFullscreen(); 
            } else if(document.msExitFullscreen) { 
            document.msExitFullscreen();
            } else if(document.mozCancelFullScreen) { 
            document.mozCancelFullScreen();
            } else if(document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();    
            } 
            this.fullscreen = !this.fullscreen;
        },
        // 身份证上传
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    }
}    
</script>

<style scoped lang="less">
.nav_toolbar li>a{
        position: relative;
        display: block;
        padding: 10px 15px; 
        overflow: hidden;
        padding-top: 22px;
        padding-bottom: 22px;
        line-height: 22px;
        color: #76838f;
    }
.userregister{
    width:100%;
    height:100%;
    overflow-y:scroll;
    background:#f1f4f5;
    .nav{
        position: fixed;
        right: 0;
        left: 0;
        z-index: 1500;
        top: 0;
        width: 100%;
        background-color: #3a3f51;
        height:66px;
        -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.08);
        box-shadow: 0 2px 4px rgba(0,0,0,.08);
        .nav_header{
            float: left;
            width: 260px;
            .nav_brand{
                float: left;
                height: 66px;
                img{height: 42px;
                    margin:12px 0 0 19px;}
            }
        }
        .nav_container{
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            background-color: #fff;
            position:relative;
            margin-left: 260px;
            height:66px;
            min-width:360px;
            ul.nav_toolbar{
                float:left;
                li{float:left;display:block;}
                li#toggleMenubar{}
                li#toggleFullscreen{}
                li.dropdown{
                    a{
                        cursor:pointer;
                        i{margin-left:5px;}
                    }
                    span{
                        position:absolute;
                        box-sizing:border-box;
                        -webkit-box-sizing:border-box;
                        -moz-box-sizing:border-box;
                        padding:20px 30px;
                        width:98%;
                        left:5px;
                        right:5px;
                        margin-top:5px;
                        border:1px solid #e4eaec;
                        z-index:1000;
                        background:#fff; 
                        border-radius:3px;
                        div{
                            position: relative;
                            float: left;
                            min-height: 1px;
                            padding-left: 15px;
                            padding-right: 15px;
                            width:160px;
                            text-align:left;
                            i{
                                font-size:18px;
                                margin-right:6px;
                                color: #76838f;
                            }
                            a{color:#63a8ea;
                              display:inline-block;}
                        }
                    }
                }
            }
            div.language{
                height:66px;
                min-width:120px;
                span{
                    display:inline-block;
                    margin-top:18px;
                    font-size:17px;
                    cursor:pointer;
                    img{
                        height:29px;
                        margin-right:5px;
                    }
                }
            }
        }
    }
    .left_collapse{
        z-index: 1400;
        position: fixed;
        top: 66px;
        height: 100%;
        // height: -webkit-calc(100% - 66px);
        // height: calc(100% - 66px);
        background: #3a3f51;
        color: rgba(163,175,183,.9);
        font-family: 'microsoft yahei', Roboto, sans-serif;
        -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.08);
        box-shadow: 0 2px 4px rgba(0,0,0,.08);
        width:260px;
        ul{
            li{
                -webkit-transition: all .25s, font .1s .15s, color .1s .15s;
                -o-transition: all .25s, font .1s .15s, color .1s .15s;
                transition: all .25s, font .1s .15s, color .1s .15s;
                font-size: 15px;
                padding: 0 24px;
                color: #76838f;
                line-height: 38px;
                text-transform: uppercase;
                margin-top: 20px;
                text-align:left;
            }
        }
    }
    .content{
        background:#f1f4f5;
        // background:hotpink;
        position: relative;
        // min-height: -webkit-calc(100% - 44px);
        // min-height: calc(100% - 44px);
        margin-left:260px;
        margin-top:66px;
        .content_title{
            margin: 44px 0 22px;  
            padding: 30px 30px;
            margin-top: 0;
            margin-bottom: 0;
            background: 0 0;
            position: relative;
            border-bottom: none;
            h1{font-size:26px;text-shadow: rgba(0,0,0,.15) 0 0 1px;
            color: #37474f;text-align:left;font-weight:400;margin-bottom:5px;}
        }
        .main{
            // padding:15px;
            // padding-top:0;
            background:#fff;
            margin:15px;
            border-radius:4px;
            margin-bottom:100px;
            padding-bottom:30px;
            form{
                h3{
                   padding: 20px 30px;
                   font-size: 18px;
                   color: #37474f; 
                   font-weight:400;
                   text-align:left;
                }
                .form_body{
                    padding:0 30px;
                    .el-row{
                        margin-top:10px;
                        .input_title{
                            text-align:right;
                            padding:6px;
                            font-size:16px;
                            color:#48576a;
                        }
                        .el-col{
                            input{width:100%;}
                        }
                    }
                }
            }
        }
    }
}
@media(max-width:768px){
.userregister .content .main form .form_body .el-row .input_title{
    text-align:left;
}}
// 语言选择样式
.language_box li img{height:29px;}  
// element面包屑样式
// span.el-breadcrumb__item{color: #97a8be!important;}
.el-breadcrumb{font-size:15px;}
// 上传图片

// 导航栏折叠
.width90{
    width:90px!important;
}
.margin-left90{
    margin-left:90px!important;
}
</style>
