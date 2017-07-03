<template>
    <div class="sidebar" :style="opencollapse">
      <transition name="fade">
        <!--导航菜单-->
         <el-menu key="save" :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router v-if="getcollapsed">
            <template v-for="(item,index) in $t('Item')">
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
        <ul key="edit" :default-active="onRoutes" class="collapsed" style="width:90px" v-else ref="menuCollapsed" router>
			<li v-for="(item,index) in  $t('Item')">
              <template v-if="!item.item">
				<div><router-link :to="item.url"><i :class="item.iconclassname"></i></router-link></div>
              </template>  
              <template v-else>
                <div @mouseover="showmenu(index,true)" @mouseout="showmenu(index,false)"><i :class="item.iconclassname"></i></div>
                <ul :class="'submenu-hook-'+index" @mouseover="showmenu(index,true)" @mouseout="showmenu(index,false)">
                    <li v-for="(options,index) in item.item"><router-link  :to="options.url">{{options.option}}</router-link></li>
                </ul> 
              </template>
			</li>
		</ul>
      </transition>  
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import VueI18n from 'vue-i18n'
    import i18n from '../../../vueI18n/i18n.js'
    export default {
      name: 'sidebar',
      data () {
           return {
               
            //   Item: [
            //         {
            //             menu:"仪表板",
            //             iconclassname:"el-icon-date",
            //             url:"home"
            //         },
            //         {
            //             menu:"账号管理",
            //             iconclassname:"el-icon-menu",
            //             item:[
            //                 {option:"角色管理",url:"one"},
            //                 {option:"账号管理",url:"two"}
            //             ]
            //         },
            //         {
            //             menu:"系统参数设置",
            //             iconclassname:"el-icon-message",
            //             item:[
            //                 {option:"交易类型设置",url:"three"},
            //                 {option:"交易类型名称设置",url:"four"},
            //                 {option:"交易类型语言设置",url:"five"},
            //                 {option:"投资额设置",url:"six"},
            //                 {option:"利润率设置",url:"seven"},
            //                 {option:"时间段设置",url:"eight"},
            //                 {option:"系统加载设置",url:"nine"}
            //             ]   
            //         },
            //         {
            //             menu:"风控参数设置",
            //             iconclassname:"el-icon-star-off",
            //             item:[
            //                 {option:"交易品种与类型设置",url:""},
            //                 {option:"交易时间段设置",url:""},
            //                 {option:"交易组投资额风控",url:""},
            //                 {option:"交易组利润率风控",url:""}
            //             ]
            //         },
            //         {
            //             menu:"风险参数设置",
            //             iconclassname:"el-icon-star-on",
            //             item:[
            //                 {option:"交易总量设置",url:""},
            //                 {option:"订单总数设置",url:""},
            //                 {option:"投资参数设置",url:""}
            //             ]
            //         },
            //         {
            //             menu:"风险监控",
            //             iconclassname:"el-icon-menu",
            //             item:[
            //                 {option:"交易报警监控",url:""},
            //                 {option:"外汇普通盈亏监控",url:""},
            //                 {option:"短线外汇盈亏监控",url:""},
            //                 {option:"IP地址监控",url:""}
            //             ]
            //         },
            //         {
            //             menu:"报表查询",
            //             iconclassname:"el-icon-message",
            //             item:[
            //                 {option:"短线外汇持仓交易明细",url:""},
            //                 {option:"短线外汇平仓交易明细",url:""},
            //                 {option:"外汇持仓交易明细",url:""},
            //                 {option:"外汇平仓交易明细",url:""},
            //                 {option:"入金明细",url:""},
            //                 {option:"出金明细",url:""},
            //                 {option:"佣金明细",url:""},
            //                 {option:"用户佣金明细",url:""},
            //                 {option:"佣金来源明细",url:""},
            //                 {option:"订单佣金明细",url:""}
            //             ]
            //         },
            //         {
            //             menu:"统计查询",
            //             iconclassname:"el-icon-star-on",
            //             item:[
            //                 {option:"新注册用户统计",url:""},
            //                 {option:"交易量统计",url:""},
            //                 {option:"入金量统计",url:""},
            //                 {option:"出金量统计",url:""},
            //                 {option:"佣金量统计",url:""},
            //                 {option:"用户佣金量统计",url:""},
            //                 {option:"短线外汇盈亏统计",url:""},
            //                 {option:"外汇交易盈亏统计",url:""}
            //             ]
            //         },
            //         {
            //             menu:"审核/冻结/设置",
            //             iconclassname:"el-icon-star-off",
            //             item:[
            //                 {option:"注册客户审核",url:""},
            //                 {option:"客户冻结",url:""},
            //                 {option:"代理审核",url:""},
            //                 {option:"出金审核",url:""},
            //                 {option:"代理资格撤销",url:""},
            //                 {option:"系统参数设置",url:""},
            //                 {option:"通用佣金参数设置",url:""},
            //                 {option:"指定佣金参数设置",url:""},
            //                 {option:"短线佣金参数设置",url:""},
            //                 {option:"外汇佣金参数设置",url:""},
            //                 {option:"组参数设置",url:""},
            //                 {option:"组品种设置",url:""},
            //                 {option:"品种参数设置",url:""},
            //                 {option:"报警参数设置",url:""}
            //             ]
            //         },
            //         {
            //             menu:"信息管理",
            //             iconclassname:"el-icon-star-on",
            //             item:[
            //                 {option:"通告管理",url:"oppp"},
            //                 {option:"留言管理",url:""}
            //             ]
            //         }]
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
                return 'width:250px';
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
    width: 90px;
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
        font-size: 28px;
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
   .collapsed li a.router-link-active{
       color: #20a0ff;
   }
</style>
