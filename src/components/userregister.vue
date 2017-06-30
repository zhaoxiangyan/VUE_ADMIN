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
   <div class="left_collapse"></div>
   <!--注册表单内容块-->
   <div class="content"></div>
</div>
</template>

<script>
    import VueI18n from 'vue-i18n'
    import i18n from '../vueI18n/i18n.js'
export default {
    name: 'userregister',
    methods: {
        ll: function(n){
          i18n.locale = n;
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
    .nav{
        position: fixed;
        right: 0;
        left: 0;
        z-index: 1500;
        top: 0;
        width: 100%;
        background-color: #3a3f51;
        height:66px;
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
            margin-left: auto;
            background-color: #fff;
            position:relative;
            margin-left: 260px;
            height:66px;
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
                        // display:none;
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
                span{
                    display:inline-block;
                    margin-top:15px;
                    img{
                        height:35px;
                        margin-right:5px;
                    }
                }
            }
        }
    }
} 
   
</style>
