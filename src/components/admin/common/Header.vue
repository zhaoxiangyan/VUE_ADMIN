<template>
        <div class="header">
            <div class="left" v-bind:class="[ getcollapsed ? '' : 'min-left']">
                图灵
            </div>
            <div class="center" @click.prevent="changecollapsed">
                <i v-bind:class="[ getcollapsed ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right']" ></i>
            </div>
            <div class="right">
                  <el-dropdown trigger="hover" @command="handleCommand">
                   <span class="el-dropdown-link">{{name}} <img  v-bind:src=src ></span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="/system/three">我的信息</el-dropdown-item>
                      <el-dropdown-item command="/system/two">设置</el-dropdown-item>
                      <el-dropdown-item divided command="/system/">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                 </el-dropdown>  
            </div>
        </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    export default {
      name: 'header',  
      data () {
        return {
          name: 'linxin',
          src: '../../static/img/boy_default.png'
          // collapsed:false
        }
      },
      computed: {
      // 使用对象展开运算符将getters混入computed对象中
      ...mapGetters([
        'getcollapsed'
      ])    
      },
      mounted:function(){
        // 线上代码begin
        // 登录拦截
        // var self = this;
        // self.$http({
        //         method: 'get',
        //         url: '/turingcloud/login/isLogin',
        //         }).then(function(res){
        //            if(res.data == true){
        //                    // 返回用户信息
        //                     self.$http({
        //                             method: 'get',
        //                             url: '/turingcloud/user/'
        //                             }).then(function(res){
        //                                 self.name = res.data.username;
        //                                 if(res.data.sex == "女"){
        //                                   self.src = '../static/img/girl_default.png';
        //                                 }
        //                             }).catch(function(err){
        //                                 console.log("AJAX失败");
        //                             }); 
        //            }else{
        //              self.$router.push('/system/');
        //            }
        //         }).catch(function(err){
        //             console.log("AJAX失败");
        //         }); 
        //  线上代码end
      },
      methods: {
        //折叠导航栏
        // collapse:function(){
        //   this.collapsed=!this.collapsed;
        // }
        ...mapActions([
          'changecollapsed'
        ]),
        handleCommand(command) {
          var self = this;
          if(command == '/system/'){
             self.$http({
              method: 'post',
              url: '/turingcloud/user/logout'
              }).then(function(res){
                  self.$router.push('/system/');
              }).catch(function(err){
                  alert("AJAX失败");
              }); 
          }else{
            self.$router.push(command);
          }
        }
      }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        background:#242f42;
    }
    .header .left{
        box-sizing:border-box;
        width:201px;
        height:70px;
        padding-left:20px;
        padding-right:20px;
        border-color:rgba(238,241,146,0.3);
        border-width:1px;
        border-right-style:solid;
        float:left;
    }
    .left.min-left{
      width:81px;
      padding:0;
    }
    .header .center{
        padding:0 23px;
        width:22px;
        height:70px;
        line-height:70px;
        cursor:pointer;
        float:left;
    }
    .header .right{
      float:right;
      padding-right:35px;
      text-align:right;
      position:relative;
      height:70px;
    }
    .right span{
      cursor:pointer;
      color:#fff;
      font-size:18px;
    }
    .right span img{
      width:50px;
      height:50px;
      border-radius:25px;
      margin:10px 0 10px 10px;
      float:right;
    }
    .right ul{
      margin: 5px 0;
      border: 1px solid #d1dbe5;
      box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.12);
      padding: 6px 0;
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
      min-width: 100px;
      background:#fff;
    }
    .right ul li{
      color:#000;
      font-size:14px;
      list-style: none;
      line-height: 36px;
      padding: 0 10px;
      margin: 0;
      cursor: pointer;
    }
</style>
