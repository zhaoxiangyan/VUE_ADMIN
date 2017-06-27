<i18n>
{
  "en": {
    "hello": "hello world!"
  },
  "ja": {
    "hello": "こんにちは、世界！"
  }
}
</i18n>
<template>
        <div class="header">
            <div class="left" v-bind:class="[ getcollapsed ? '' : 'min-left']">
                XMAO
            </div>
            <div class="center" @click.prevent="changecollapsed">
                <i v-bind:class="[ getcollapsed ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right']" ></i>
            </div>
            <span>语言切换：{{$t("Item[0].menu")}}</span>
            <div class="right">
                  <el-dropdown class="personal" trigger="hover">
                   <span class="el-dropdown-link">andy<img src="../../assets/user_photo.jpg"></span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>我的消息</el-dropdown-item>
                      <el-dropdown-item>设置</el-dropdown-item>
                      <el-dropdown-item divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                 </el-dropdown>  
                 <el-dropdown class="language" trigger="click">
                   <span class="el-dropdown-link"><img src="../../assets/China.png">{{$t('Item[0].menu')}}</span>
                    <el-dropdown-menu class="language_box"  slot="dropdown">
                      <el-dropdown-item @click="i18n.locale='ja'"><img src="../../assets/China.png">简体中文</el-dropdown-item>
                      <el-dropdown-item @click="locale('ja')"><img src="../../assets/Japan.png">日语</el-dropdown-item>
                      <el-dropdown-item @click="locale('en')"><img src="../../assets/United Kingdom(Great Britain).png" >英语</el-dropdown-item>
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
          // locale: 'en'
       
        }
      },
      // watch: {
      //   locale (val) {
      //     this.$i18n.locale = val
      //   }
      // },
      computed: {
      // 使用对象展开运算符将getters混入computed对象中
      ...mapGetters([
        'getcollapsed',
        'getlocale'
      ])    
      },
      methods: {
        //折叠导航栏
        ...mapActions([
          'changecollapsed',
          'changelanguage'
        ]),
        locale: function(val) {
          alert(val);
          i18n.locale = val;
        }
        // Changelanguage: function(type){
        //   store.commit('changelanguage',type);
        // }
        // Changelanguage(n){
        //   this.$store.dispatch("changelanguage")
        // }
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
        width:251px;
        height:70px;
        padding-left:20px;
        padding-right:20px;
        border-color:rgba(238,241,146,0.3);
        border-width:1px;
        border-right-style:solid;
        float:left;
    }
    .left.min-left{
      width:91px;
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
    .right .personal span img{
      width:40px;
      height:40px;
      border-radius:40px;
       /*margin:10px 0 10px 10px;*/
      vertical-align:middle; 
      margin-left:10px;
      /* float:right;*/
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
    .right .language{
      margin-left:20px; 
    }
    .right .language span img{
      width:28px;
      vertical-align:middle;
      margin-right:5px;
    }
    .language_box li img{
      width:28px;
      vertical-align:middle;
      /*text-align:right;*/
    }
</style>
