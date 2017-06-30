<template>
<div class="userregister">
<!-- 头部导航内容块 -->
   <div class="nav">
       <div class="nav_header">
           <div class="nav_brand">
              <img class="nav_brand_logo" src="../assets/logo.png" >
           </div>
       </div>
       <div class="nav_container clearfix">
           <ul class="nav_toolbar">
               <li id="toggleMenubar"><a><i class="fa fa-bars"></i></a></li>
               <li id="toggleFullscreen"><a><i class="fa fa-arrows-alt"></i></a></li>
               <li class="dropdown">
                  <a>快捷导航<i class="fa fa-angle-down"></i></a>
                  <span>
                        <div><i class="fa fa-angle-right"></i><a>登录</a></div>
                        <div><i class="fa fa-angle-right"></i><a>注册</a></div>
                  </span>
               </li>
           </ul>
           <el-dropdown class="language fr" trigger="hover">
                    <span class="el-dropdown-link"><img src="../assets/China.png">{{$t("Item[0].menu")}}</span>
                    <el-dropdown-menu class="language_box"  slot="dropdown">
                      <el-dropdown-item @click.native="ll('cn')"><img src="../assets/China.png">简体中文</el-dropdown-item>
                      <el-dropdown-item @click.native="ll('ja')"><img src="../assets/Japan.png">日语</el-dropdown-item>
                      <el-dropdown-item @click.native="ll('en')"><img src="../assets/English.png" >英语</el-dropdown-item>
                    </el-dropdown-menu>
            </el-dropdown>
       </div>
   </div>
   <!--左边折叠导航栏-->
   <div class="left_collapse">
        <ul>
           <li>导航</li>
        </ul>
   </div>
   <!--注册表单内容块-->
   <div class="content">
        <div class="content_title">
           <h1>注册真实账号</h1>
           <el-breadcrumb separator="/">
                <el-breadcrumb-item>当前位置</el-breadcrumb-item>
                <el-breadcrumb-item>注册真实账号</el-breadcrumb-item>
           </el-breadcrumb>
        </div>
        <div class="main">
          <form>
             <h3 class="form_title">注册真实账号</h3>
             <div class="form_body">
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*姓名:</el-col>
                    <el-col :sm="12" :lg="12">
                       <el-input name="username" placeholder="username"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*推荐人编号:</el-col>
                    <el-col :sm="12" :lg="12">
                       <el-input name="parentid" placeholder="parentid"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*身份证号码:</el-col>
                    <el-col :sm="12" :lg="12">
                       <el-input name="identifier" placeholder="identifier"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*手机:</el-col>
                    <el-col :sm="12" :lg="12">
                       <el-input name="mobile" placeholder="mobile"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*邮箱:</el-col>
                    <el-col :sm="12" :lg="12">
                       <el-input name="email" placeholder="email"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*国家:</el-col>
                    <el-col :sm="12" :lg="12">
                        <el-select v-model="value" placeholder="country" style="width:100%;" name="country">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*省/州:</el-col>
                    <el-col :sm="12" :lg="12">
                       <el-input name="province" placeholder="province"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*市:</el-col>
                    <el-col :sm="12" :lg="12">
                       <el-input name="city" placeholder="city"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*县:</el-col>
                    <el-col :sm="12" :lg="12">
                       <el-input name="town" placeholder="town"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*详细地址:</el-col>
                    <el-col :sm="12" :lg="12">
                       <el-input name="address" placeholder="address"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*账号密码:</el-col>
                    <el-col :sm="12" :lg="12">
                       <el-input type="password" name="password" placeholder="password"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*确认账号密码:</el-col>
                    <el-col :sm="12" :lg="12">
                       <el-input type="password" name="repassword" placeholder="repassword"></el-input>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*上传身份证正面:</el-col>
                    <el-col :sm="12" :lg="12">
                        <el-upload 
                        class="upload-demo fl"
                        drag name="image1"
                        action="https://jsonplaceholder.typicode.com/posts/">
                        <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
                        </el-upload>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*上传身份证反面:</el-col>
                    <el-col :sm="12" :lg="12">
                        <el-upload 
                        class="upload-demo fl"
                        drag name="image2"
                        action="https://jsonplaceholder.typicode.com/posts/">
                        <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
                        </el-upload>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6">*</el-col>
                    <el-col :sm="12" :lg="12" style="text-align:left;">
                    注意事项：上传的单张图片大小不要超过2M;否则影响开户！
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6"></el-col>
                    <el-col :sm="12" :lg="12" style="text-align:left;">
                     <el-checkbox v-model="checked" name="agree">我已阅读，了解并接受</el-checkbox>
                     <a href="javascript:void(0);" style="color:red;font-size:14px;">客户协议</a>
                    </el-col>
                 </el-row>
                 <el-row :gutter="15">
                    <el-col class="input_title" :sm="12" :lg="6"></el-col>
                    <el-col :sm="12" :lg="12" style="text-align:left;">
                       <el-button type="primary" style="width:130px;">注册</el-button>
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
        checked: true
      } 
    },
    methods: {
        ll: function(n){
          i18n.locale = n;
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
                    margin:12px 0 0 30px;}
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
                        i{margin-left:5px;}
                    }
                    span{
                        position:absolute;
                        display:none;
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
                    margin-top:15px;
                    font-size:17px;
                    cursor:pointer;
                    img{
                        height:35px;
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
// 语言选择样式
.language_box li img{height:35px;}  
// element面包屑样式
// span.el-breadcrumb__item{color: #97a8be!important;}
.el-breadcrumb{font-size:15px;}
// 上传图片
// .el-upload{width:100%;height:100%;}
// .el-upload-dragger{width:500px;height:34px;}
</style>
