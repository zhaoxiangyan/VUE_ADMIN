<template>
    <div class="sidebar" :style="opencollapse">
        <!--导航菜单-->
         <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router v-if="getcollapsed">
            <template v-for="(item,index) in Item" >
              <el-submenu :index="index+''" v-if="item.item">
                <template slot="title"><i :class="item.iconclassname"></i>{{item.menu}}</template>
                <el-menu-item v-for="options in item.item" :key="options.url" :index="options.url">{{options.option}}</el-menu-item>
              </el-submenu>
              <el-menu-item v-if="!item.item" :index="item.url">
                <i :class="item.iconclassname"></i>{{item.menu}}
              </el-menu-item>  
            </template>
        </el-menu> 
        <!--导航菜单-折叠后-->
        <ul class="collapsed" style="width:80px" v-else ref="menuCollapsed" router>
			<li v-for="(item,index) in Item">
              <template v-if="!item.item">
				<div><router-link :to="item.url"><i :class="item.iconclassname"></i></router-link></div>
              </template>  
              <template v-else>
                <div @mouseover="showmenu(index,true)" @mouseout="showmenu(index,false)"><i :class="item.iconclassname"></i></div>
                <ul :class="'submenu-hook-'+index" @mouseover="showmenu(index,true)" @mouseout="showmenu(index,false)">
                    <li v-for="options in item.item"><router-link  :to="options.url">{{options.option}}</router-link></li>
                </ul> 
              </template>
			</li>
		</ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    export default {
      name: 'sidebar',
      data () {
           return {
              Item: [
                    {
                        menu:"主页",
                        iconclassname:"el-icon-date",
                        url:"home"
                    },
                    {
                        menu:"签约协议",
                        iconclassname:"el-icon-edit",
                        url:"one"
                    },
                    {
                        menu:"账户交易配置",
                        iconclassname:"el-icon-setting",
                        url:"two"
                    },
                    {
                        menu:"个人信息",
                        iconclassname:"el-icon-document",
                        url:"three"
                    }]

           }
      },
      computed: {
        onRoutes () {
          return this.$route.path.replace('/', '');
          console.log(this.$route.path.replace('/', ''))
        },
        // 使用对象展开运算符将getters混入computed对象中
        ...mapGetters([
            'getcollapsed'
        ]),
        opencollapse:function(){
            if(this.getcollapsed){
                return 'width:200px';
            }
        } 
      },
      methods: {
        showmenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display= status?'block':'none';
		}, 
        //折叠导航栏
        ...mapActions([
          'changecollapsed'
        ])
      }
    }

</script>

<style scoped>
   .sidebar{
    display: block;
    position: absolute;
    width: 80px;
    left: 0;
    top: 70px;
    bottom: 0;
    /*background: #2E363F;*/
    background:#324157;
   } 
   div.hover{
       width:250px;
   }
   .sidebar>ul.el-menu{
       height:100%;
       text-align:left;
   }
   .sidebar>ul.collapsed{
       width:90px;
       height:100%; 
       list-style: none;
       position: relative;
       margin: 0;
       padding-left: 0;
   }
   .collapsed>li{
      position:relative;
      list-style:none; 
   }
   .collapsed li div{
        height: 56px;
        line-height: 56px;
        font-size: 25px;
        color: rgba(163,175,183,.9);
        /* padding: 0 20px; */
        cursor: pointer;
        position: relative;
        transition: border-color .3s,background-color .3s,color .3s;
        box-sizing: border-box;
        white-space: nowrap;  
   }
   .collapsed li ul{
        position: absolute;
        top: 0px;
        left: 90px;
        z-index: 99999;
        height: auto;
        display: none;
        background:#1f2d3d;
   }
   .collapsed li ul li{
        width:240px;
        height: 50px;
        line-height: 50px;
        /*padding: 0 45px;*/
        /*padding-left:40px;*/
        list-style:none;
        color:#fff;
   }
   .collapsed li div:hover{
       background:#48576a;
   }
   .collapsed li a{
       display:block;
       color:#fff;
   }
   .collapsed li a.active{
       color:#20a0ff;
   }
   .collapsed li div a{
       display:block;
       color:rgba(163,175,183,.9);
   }
   .collapsed li a:hover{
       background:#48576a;
   }
</style>
